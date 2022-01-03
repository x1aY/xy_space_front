
import request from '@/utils/requestOld'

export function login(data) {
  return request({
    url: '/WQAnalysis/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/WQAnalysis/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/WQAnalysis/user/logout',
    method: 'post'
  })
}
