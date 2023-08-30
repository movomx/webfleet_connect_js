const generateErrorText = require('./helpers/error')
const hasError = require('./helpers/errorValidator')

const buildError = response => ({
  url: response.url,
  statusCode: response.statusCode,
  error: generateErrorText(response.data)
})

const generatePromise = response => (
  new Promise((resolve, reject) => {
    if (hasError(response)) reject(buildError(response))
    resolve(response)
  })
)

module.exports = generatePromise
