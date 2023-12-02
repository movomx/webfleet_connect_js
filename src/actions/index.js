const addresses = require('./addresses')
const areas = require('./areas')
const configuration = require('./configuration')
const drivers = require('./drivers')
const events = require('./events')
const geocoding = require('./geocoding')
const linkConnect = require('./linkConnect')
const messageQueues = require('./messageQueues')
const messages = require('./messages')
const miscellaneous = require('./miscellaneous')
const objects = require('./objects')
const orders = require('./orders')
const plugins = require('./plugins')
const reporting = require('./reporting')
const trips = require('./trips')
const userManagement = require('./userManagement')
const vehicleMaintenance = require('./vehicleMaintenance')

const actions = () => ([
  ...addresses(),
  ...areas(),
  ...configuration(),
  ...drivers(),
  ...events(),
  ...geocoding(),
  ...linkConnect(),
  ...messageQueues(),
  ...messages(),
  ...miscellaneous(),
  ...objects(),
  ...orders(),
  ...plugins(),
  ...reporting(),
  ...trips(),
  ...userManagement(),
  ...vehicleMaintenance()
].sort())

module.exports = actions
