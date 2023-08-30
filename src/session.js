const addActions = require('./actions/addActions')

class Session {
  constructor(credentials, config) {
    this.credentials = credentials
    this.config = config
    addActions(this)
  }
}

module.exports = { Session }
