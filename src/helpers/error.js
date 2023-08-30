const SITE = 'https://www.webfleet.com/'
const ENDPOINT = `
  static/help/webfleet-connect/en_gb/index.html#data/responsecodes.html
`.trim()

const convertToObject = error => {
  const array = error.split(',')
  return { code: array[0], message: array[1] }
}

const format = error => `${error.errorCode} - ${error.errorMsg}`

const formatError = error => {
  if (typeof error === 'string') return format(convertToObject(error))
  return format(error)
}

const generateErrorText = error => (
  `${error} \n\n Check ${SITE}${ENDPOINT} for more details.`
)

module.exports = generateErrorText
