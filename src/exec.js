const buildQueryParams = require('./helpers/buildQueryParams')
const connection = require('./service')
const generatePromise = require('./promise')
const handleResponse = require('./response')

const exec = async (session, action, params) => {
  const parameters = buildQueryParams(session, action, params)
  const response = await connection(parameters)
  const formatedResponse = handleResponse(response)
  return generatePromise(formatedResponse)
}

module.exports = exec
