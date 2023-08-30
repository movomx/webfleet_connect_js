const trips   = require('./trips')
const objects = require('./objects')
const addresses = require('./addresses')
const drivers = require('./drivers')
const events = require('./events')
const geocoding = require('./geocoding')
const messages = require('./messages')
const miscellaneous = require('./miscellaneous')
const orders = require('./orders')

const actions = () => ([
  ...addresses(),
  ...drivers(),
  ...events(),
  ...geocoding(),
  ...messages(),
  ...miscellaneous(),
  ...objects(),
  ...orders(),
  ...trips()
].sort())

module.exports = actions
