import axios from 'axios'
import router from 'vue-router'
import Cookies  from 'js-cookie'

axios.defaults.timeout=5000
axios.defaults.baseURL = 'https://www.fastmock.site/mock/13ed63e0b7c00387334ba5cbc9b12da7/api'


// 设置http request拦截器
axios.interceptors.request.use(
  config => {
    const token = Cookies.get('token')//注意使用的时候需要引入cookie方法，推荐使用js-cookie
    config.data = JSON.stringify(config.data)
    config.headers={
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    if(token) {
      config.params = { 'token':token }
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)


// 设置http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errorCode === 2) {
      router.push({
        path:'/login',
        querry: {
          redirect: router.currentRoute.fullPath
        }
      })
    }
    return response
  },
  err => {
    return Promise.reject(err)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装patch方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch (url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装put方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
