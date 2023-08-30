const getErrorCode = error => error.split(',')[0]

const isString = error => typeof error === 'string'

const hasCsvError = error => {
  if (isString(error)) return parseInt(getErrorCode(error))
}

const hasError = response => (
  response.data?.errorCode || hasCsvError(response.data)
)

module.exports = hasError
