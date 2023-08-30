const handleResponse = require('./response')
const { hasCsvError, buildCsvError } = require('./csvHandler')
const { hasJsonError, buildJsonError } = require('./jsonHandler')

const isCsv = response => (typeof response.data === 'string')

const hasError = response => {
  if (isCsv(response)) return hasCsvError(response)
  return hasJsonError(response)
}

const buildError = response => {
  if (isCsv(response)) return buildCsvError(response)
  return buildJsonError(response)
}

const generatePromise = response => (
  new Promise((resolve, reject) => {
    if (hasError(response)) reject(buildError(response))
    resolve(handleResponse(response))
  })
)

module.exports = generatePromise
