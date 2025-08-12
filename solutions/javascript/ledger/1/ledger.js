class LedgerEntry {
  constructor() {
    this.date = undefined;
    this.description = undefined;
    this.change = undefined;
  }
}

export function createEntry(date, description, change) {
  let entry = new LedgerEntry();
  entry.date = new Date(date);
  entry.description = description;
  entry.change = change;
  return entry;
}

export function formatEntries(currency, locale, entries) {
  let table = '';
  // 1. Added translations object to be extensible
  const translations = {
    'en-US': {
      'Date': 'Date',
      'Description': 'Description',
      'Change': 'Change',
    },
    'nl-NL': {
      'Date': 'Datum',
      'Description': 'Omschrijving',
      'Change': 'Verandering',
    }
  };
  // Generate Header Row
  // 2. Removed high-level locale if-else
  table +=
    translations[locale]['Date'].padEnd(10, ' ') +
    ' | ' +
    translations[locale]['Description'].padEnd(25, ' ') +
    ' | ' +
    translations[locale]['Change'].padEnd(13, ' ') +
    '\n';

  // Sort entries
  entries.sort(
    (a, b) =>
      a.date - b.date ||
      a.change - b.change ||
      a.description.localeCompare(b.description),
  );

  entries.forEach((entry) => {
    // Write entry date to table
    let dateStr;
    // 3. Date formats are different so not changing those
    if (locale === 'nl-NL') {
        dateStr = `${entry.date.getDate().toString().padStart(2, '0')}-${(
          entry.date.getMonth() + 1
        )
          .toString()
          .padStart(2, '0')}-${entry.date.getFullYear()}`;
    }
    else if (locale === 'en-US') {
        dateStr = `${(entry.date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}/${entry.date
          .getDate()
          .toString()
          .padStart(2, '0')}/${entry.date.getFullYear()}`;
    }
    table += `${dateStr} | `;

    // Write entry description to table
    const truncatedDescription =
      entry.description.length > 25
      ? `${entry.description.substring(0, 22)}...`
      : entry.description.padEnd(25, ' ');
    table += `${truncatedDescription} | `;

    // 4. Merged formatting options
    // Write entry change to table
    let changeStr = '';
    const formattingOptions = {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    // 5. nl-NL has one extra prop
    if (locale === 'nl-NL') {
      formattingOptions['currencyDisplay'] = 'narrowSymbol';
    }
    // 6. Merged changeStr logic for negative eu-US change
    if (locale === 'en-US' && entry.change < 0) {
      changeStr = `(${Math.abs(entry.change / 100).toLocaleString(
        locale,
        formattingOptions,
      )})`;
    } else {
      changeStr = `${(entry.change / 100).toLocaleString(
        locale,
        formattingOptions,
      )} `;
    }
    table += changeStr.padStart(13, ' ');
    table += '\n';
  });
  return table.replace(/\n$/, '');
}
