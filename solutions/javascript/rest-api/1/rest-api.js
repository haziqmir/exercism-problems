//
// This is only a SKELETON file for the 'Rest API' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class RestAPI {
  constructor(db = { users: [] }) {
    this.db = db;
  }

  get(url) {
    const [cmd, query] = url.split('?');
    let users = this.db.users;

    if (!cmd) return {};

    if (cmd === '/users') {
      const params = new URLSearchParams(query);
      if (params.has('users')) {
        const names = params.get('users').split(',');
        users = users.filter(u => names.includes(u.name));
      }
    }
    return {
      users: [...users].sort((a, b) => a.name.localeCompare(b.name))
    };

    return {};
  }

  post(url, payload) {
    if (url === '/add') {
      const newUser = {
        name: payload.user,
        owes: {},
        owed_by: {},
        balance: 0,
      }
      this.db.users.push(newUser);
      return newUser;
    }

    if (url === '/iou') {
      const { lender, borrower, amount } = payload;
      const lenderUser = this.db.users.find(u => u.name === lender);
      const borrowerUser = this.db.users.find(u => u.name === borrower);

      // net, +ve -> lender, -ve -> borrower
      const net = (lenderUser.owed_by[borrower] || 0) - (lenderUser.owes[borrower] || 0) + amount;

      delete lenderUser.owed_by[borrower];
      delete lenderUser.owes[borrower];
      delete borrowerUser.owed_by[lender];
      delete borrowerUser.owes[lender];

      if (net > 0) {
        lenderUser.owed_by[borrower] = net;
        borrowerUser.owes[lender] = net;
      } else if (net < 0) {
        lenderUser.owes[borrower] = -net;
        borrowerUser.owed_by[lender] = -net;
      }

      const adjust = (user) => {
        const owedBy = Object.values(user.owed_by).reduce((a, b) => a + b, 0);
        const owes = Object.values(user.owes).reduce((a, b) => a + b, 0);
        user.balance = owedBy - owes;
      }

      adjust(lenderUser);
      adjust(borrowerUser);

      return {
        users: [lenderUser, borrowerUser].sort((a, b) => a.name.localeCompare(b.name))
      };
    }
  }
}
