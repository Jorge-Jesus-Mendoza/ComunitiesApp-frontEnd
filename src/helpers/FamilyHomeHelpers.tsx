import moment from 'moment';

function compareDateWithNumber(date: Date | number | string, numberToCompare: number, operator: string): boolean {
  const momentDate = moment(date);
  const age = moment().diff(momentDate, 'years');
  switch (operator) {
    case '===': // Equal to
      return age === numberToCompare;
    case '!==': // Not equal to
      return age !== numberToCompare;
    case '<': // Less than
      return age < numberToCompare;
    case '<=': // Less than or equal to
      return age <= numberToCompare;
    case '>': // Greater than
      return age > numberToCompare;
    case '>=': // Greater than or equal to
      return age >= numberToCompare;
    case 'eq': // Equal to
      return age === numberToCompare;
    case 'neq': // Not equal to
      return age !== numberToCompare;
    case 'lt': // Less than
      return age < numberToCompare;
    case 'lte': // Less than or equal to
      return age <= numberToCompare;
    case 'gt': // Greater than
      return age > numberToCompare;
    case 'gte': // Greater than or equal to
      return age >= numberToCompare;
    default:
      throw new Error('Invalid operator');
  }
}

export { compareDateWithNumber };

