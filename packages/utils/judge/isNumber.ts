import getTag from '../.internal/getTag';
import isObjectLike from './isObjectLike';

/**
 * 检查`value`是否被归类为`Number`原始值或对象。
 *
 * **注意：** 如果要排除`Infinity`、`-Infinity`和`NaN`，它们是
 *   被归类为数字，请使用`Number.isFinite`和`Number.isNaN`方法。
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 返回 true 如果`value`是数字，否则返回 false
 *
 * @example
 *
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number'
    || (isObjectLike(value) && getTag(value) === '[object Number]');
}

export default isNumber;
