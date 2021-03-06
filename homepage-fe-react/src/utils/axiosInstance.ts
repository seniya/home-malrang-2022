import axios, { AxiosInstance } from 'axios'

export function setInterceptors (instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      if (config.headers) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('MALRANG_TOKEN') || ''
      }
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    function (response) {
      console.log(`${response.config.url}`, response)
      if (response.data?.data?.token) {
        localStorage.setItem('MALRANG_TOKEN', response.data?.data?.token)
      }
      return response
    },
    function (error) {
      return Promise.reject(error)
    }
  )
  return instance
}

const apiRootPath = 'https://api.malrang.net'

function createInstance () {
  const instance: AxiosInstance = axios.create({
    baseURL: apiRootPath
  })
  return setInterceptors(instance)
}

export const axiosInstance = createInstance()
