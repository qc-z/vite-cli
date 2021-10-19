import axios from 'axios'
import Message from '@/utils/resetMessage'
import { getToken } from '@/utils/storage'
const APIHOST =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_DEV_HOST
    : import.meta.env.VITE_PRO_HOST
const service = axios.create({
  // process.env.NODE_ENV === 'development' 来判断是否开发环境
  // withCredentials的情况下，后端要设置Access-Control-Allow-Origin为你的源地址，例如http://localhost:8080，不能是*，而且还要设置header(‘Access-Control-Allow-Credentials: true’)
  // withCredentials: true
  baseURL: APIHOST,
  timeout: 20000
})

service.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken() ?? '23333333dddd'
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject()
  }
)

service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { code } = response.data

      switch (String(code)) {
        // 成功
        case '200':
          return response.data.data
        // 失效
        case '600':
          Message({
            message: response.data.data.msg,
            type: 'warning',
            duration: 2000,
            onClose: () => {
              window.location.href = '/#/403'
            }
          })
          Promise.reject(response.data)
          break
        // 500
        default:
          console.log(response.data.data)
          Message({ message: response.data.data.msg, type: 'error', duration: 2000 })
          Promise.reject(response.data)
          break
      }
    } else {
      Promise.reject(response.data)
    }
    return true
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
