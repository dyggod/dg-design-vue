const toString = Object.prototype.toString;

/**
 * 
 * @param {*} value the value to check
 * @returns {string} returns the `toStringTag` of `value`
 */
function getTag(value: any): string {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }
  return toString.call(value);
}

export default getTag;
