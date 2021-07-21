import axios from 'axios'
import { DEFAULT_ROUTE } from './routes'
const API_URL = process.env.REACT_APP_BACKEND_URL

export const postFormInfo = async (payload) => {
  return axios.post(`${API_URL}${DEFAULT_ROUTE}`, payload)
}
