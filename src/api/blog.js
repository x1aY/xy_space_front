import { request } from '@/utils/request'

export function getBlogList(pagination) {
  return request({
    url: '/myScripts/blogList',
    method: 'post',
    data: {
      page: pagination.currPage,
      perPage: pagination.pageSize
    }
  })
}
