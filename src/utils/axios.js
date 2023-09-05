import axios from 'axios'

const AxiosClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
})

AxiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

AxiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('accessToken')
      if (window.location.pathname !== '/login') {
        window.location = '/login'
      }
    }
    return Promise.reject(error)
  },
)
export default AxiosClient
