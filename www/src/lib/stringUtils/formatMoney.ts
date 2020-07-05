import currency from 'currency.js';

export default (num: string | number, options?: object) => {
  const opts = options || {
    precision: 0,
    symbol: 'Rp ',
    formatWithSymbol: true,
    separator: '.',
  };
  return currency(num, opts).format();
};
