/**
 * @description: 清除缓存
 * @param {*} key
 * @return {*}
 */
export function clearToken(key) {
  if (key) {
    sessionStorage.removeItem(key)
    return
  }
  sessionStorage.clear()
}
/**
 * @description: 获取缓存
 * @param {*} key
 * @return {*}
 */
export function getToken(key = 'token') {
  return sessionStorage.getItem(key)
}
/**
 * @description: 设置缓存
 * @param {*} key
 * @return {*}
 */
export function setToken(key = 'token', value) {
  return sessionStorage.setItem(key, value)
}
