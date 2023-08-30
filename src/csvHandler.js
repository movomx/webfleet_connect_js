const generateErrorText = require('./helpers/error')

const hasCsvError  = response => (
  Number.isInteger(parseInt(response.data.split(',')[0]))
)

const buildCsvError = response => {
  const [errorCode, text] = response.data.split(',')
  return {
    url: response.config.url,
    statusCode: errorCode,
    error: generateErrorText(text)
  }
}

module.exports = { hasCsvError, buildCsvError }
