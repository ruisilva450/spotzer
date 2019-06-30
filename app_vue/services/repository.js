// Repository.js

import axios from 'axios'

const baseDomain = 'http://localhost:3001'
const baseURL = `${baseDomain}/`

export default axios.create({
  baseURL
})
