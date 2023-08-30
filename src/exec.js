const buildQueryParams = require('./helpers/buildQueryParams')
const connection = require('./service')
const generatePromise = require('./promise')

const exec = async (session, action, params) => {
  const parameters = buildQueryParams(session, action, params)
  const response = await connection(parameters)
  return generatePromise(response)
}

module.exports = exec
