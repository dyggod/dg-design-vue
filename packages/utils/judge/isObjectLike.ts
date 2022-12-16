/**
 * 检查`value`是否是对象。如果`value`不是`null`，则它是对象，以及`typeof`的结果是"object"。
 *
 * @param {*} value 要检查的值
 * @returns {boolean} 返回`value`是否是对象
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */
export function isObjectLike(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

export default isObjectLike;
