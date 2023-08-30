const { handleConfiguration } = require('./configuration')
const { handleCredentials } = require('./credentials')
const { Session } = require('./session')

const builder = args => {
  const credentials = handleCredentials(args)
  const config = handleConfiguration(args)
  return new Session(credentials, config)
}

module.exports = { builder }
