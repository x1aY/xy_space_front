import axios from 'axios'
import { Message } from 'element-ui'
export function request(config) {
  const instance = axios.create({
    timeout: 5000,
    crossOrigin: true,
    withCredentials: true,
    xhrFields: { withCredentials: true },
    headers: { contentType: 'application/json' }
  })
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err)
  })

  instance.interceptors.response.use(res => {
    if (res.status !== 200) {
      Message({
        message: '请求出错，状态码: ' + res.status,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return res.data
  }, err => {
    Message({
      message: '请求被拒绝',
      type: 'error',
      duration: 5 * 1000
    })
    console.log(err)
  })

  return instance(config)
}
