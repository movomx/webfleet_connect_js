const actions = require('.')
const exec = require('../exec')

const add = (session, action) => {
  session[action] = async customConfig => (
    await exec(session, action, customConfig)
  )
}

const addActions = session => {
  actions().forEach(action => add(session, action))
}

module.exports = addActions
