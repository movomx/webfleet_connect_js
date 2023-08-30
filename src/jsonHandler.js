const generateErrorText = require('./helpers/error')

const hasJsonError = response => response.data?.errorCode

const buildJsonError = response => ({
  url: response.config.url,
  statusCode: response.data.errorCode,
  error: generateErrorText(response.data.errorMsg)
})

module.exports = { hasJsonError, buildJsonError }
