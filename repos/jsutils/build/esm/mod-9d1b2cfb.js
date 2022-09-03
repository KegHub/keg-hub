import { i as isNum, e as equalsNaN } from './isNum-cc6ad9ca.js';
import { g as getNums, t as toNum } from './toNum-537197a6.js';

const nth = num => {
  if (!isNum(num)) {
    num = getNums(num);
    if (!num) return '';
    num = toNum(num);
    if (equalsNaN(num)) return '';
  }
  const mod = num % 100;
  if (mod >= 10 && mod <= 20) return 'th';
  switch (num % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const toFloat = val => val && !equalsNaN(val) && parseFloat(isNum(val) && val || getNums(val)) || 0;

const toInt = val => val && !equalsNaN(val) && parseInt(isNum(val) && val || getNums(val)) || 0;

const mod = (num, divisor) => {
  return (num % divisor + divisor) % divisor;
};

export { toInt as a, mod as m, nth as n, toFloat as t };
//# sourceMappingURL=mod-9d1b2cfb.js.map
