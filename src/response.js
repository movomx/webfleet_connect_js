const convert = require('./helpers/covertToString')
const handleData = require('./helpers/handleData')

const handleResponse = response => ({
  data:       handleData(response.data),
  url:        response.config.url,
  statusCode: response.status,
  toString:   () => convert(response.data)
})

module.exports = handleResponse
