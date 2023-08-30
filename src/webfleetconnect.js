const { builder } = require('./builder')

class WebfleetConnect {
  static create(args = {}) {
    return builder(args)
  }
}

module.exports = WebfleetConnect
