export const squareRoot = num => {
  // Approach #1: Linear Search
  // let target = 0;
  // while ((target + 1) * (target + 1) <= num)
  //   target++;
  // return target;

  // Approach #2: Binary Search
  // let low = 0;
  // let high = num;

  // if (num === 1) return num;
  
  // while (low < high) {
  //   let mid = Math.floor(low + (high - low) / 2);
  //   let candidate = mid*mid;
  //   console.log(mid, candidate);
  //   if (candidate === num) return mid;
  //   else if (candidate < num) low = mid;
  //   else high = mid - 1;
  // }

  // Approach #3: Newton's Method
  let x = num;
  let root;
  let count = 0;
  while (true) {
    count++;
    root = 0.5 * (x + (num / x));
    if (Math.abs(root - x) < 0.1) break;
    x = root;
  }
  return parseInt(root);
};


// newton's method
// x_n+1 = 0.5 * (x_n + (a/x_n))