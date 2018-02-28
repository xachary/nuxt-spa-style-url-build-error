import Vue from 'vue'
import axios from 'axios'
import config from '~/plugins/config'

export default ({redirect, route}) => {
  let http = axios.create({
    baseURL: config.path,
    timeout: config.timeout
  })
  Vue.use({
    install (Vue) {
      Vue.request = http
    }
  })
}