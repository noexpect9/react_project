import request from '../request'

export function getHomeGoodData() {
  return request.get({
    url: '/home/goodprice',
  })
}
