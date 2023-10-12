import axios from 'axios';
import HelperFunctions from '../utils/helpers';

const config = import.meta.env;

class ApiHelper {
  constructor() {
    this.url = window.origin.includes('localhost') || window.origin.includes('127.0.0.1')? 'http://localhost:4400/api/v1' : `${window.origin}/api/v1`

    this.APIInstance = axios.create({ baseURL: this.url, withCredentials: true, timeout: 10000 })
  }

  async sendRequest(config) {
    // config["headers"]=  { Authorization: authorization };
    const result = await this.APIInstance(config)
      .then((response) => {
        const res = response.data
        return { status: res.status, msg: res.msg, data: res.data }
      })
      .catch((err) => {
        if (err && err.response && err.response.status && err.response.status == 401) {
          return { status: 'logout' }
        }
        if (err && err.response && err.response.data && err.response.data.msg)
          return { status: 'error', msg: `${err.response.data.msg}` }
        return { status: 'error', msg: `${err.message}` }
      })

    return result
  }
}

export default ApiHelper
