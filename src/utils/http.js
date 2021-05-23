import axios from 'axios'
// import store from '@/store'
import { Notify } from 'vant'
// import wechatAuth from '../utils/wechatAuth'
// import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.hk.zhongheinfo.com'

axios.interceptors.request.use(
  config => {
    // config.headers['site'] = getSite().site
    // config.headers['client-token'] = localStorage.getItem('x-auth-token') || (qs.parse(window.location.href.split('?')[1])).token
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Notify({ type: 'danger', message: error.msg });
    return Promise.reject(error)
  }
)
export default axios