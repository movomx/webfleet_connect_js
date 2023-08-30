const assignCurrentConfig = (session, customConfig) => {
  if (customConfig) session.setConfig(customConfig)
}

module.exports = assignCurrentConfig
