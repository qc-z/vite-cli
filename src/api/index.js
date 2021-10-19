import request from '../utils/request'

export const getDetail = (query) =>
  request({
    url: '/getDetail',
    method: 'get',
    params: query,
    title: '我的案件'
  })

export const postForm = (data, query) =>
  request({
    url: '/postForm',
    method: 'post',
    data,
    params: query,
    title: '授权',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      (data) => {
        let result = ''
        for (const key in data) {
          result += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
        }
        return result.slice(0, result.length - 1)
      }
    ]
  })
