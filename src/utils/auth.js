/* 对Cookie中的Token进行处理*/
import Cookies from 'js-cookie'

const TokenKey = 'xy_space_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
