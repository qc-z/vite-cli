/**
 * 读取静态配置
 * @private
 */
const __VITE_CONFIG__ = window.__VITE_CONFIG__ || {}

/**
 * 接口服务器
 * @type {*|string}
 */
export const API_HOST = __VITE_CONFIG__.API_HOST || 'http://127.0.0.1:8080'
