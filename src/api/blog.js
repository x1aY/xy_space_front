import { request } from '@/utils/request'

export function getBlogList() {
  return request({
    url: '/myScripts/autoExtractLec',
    method: 'get'
  })
}
