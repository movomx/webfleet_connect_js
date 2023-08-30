const hasConfigs = obj => Object.entries(obj).length

const handleObject = obj => {
  if (!obj) return ''
  const keys   = Object.keys(obj)
  const values = Object.values(obj)
  return keys.map((k, i) => `${k}=${values[i]}&`).join('')
}

const buildQueryParams = ({ credentials, config }, action, params) => {
  const credentialsParams = handleObject(credentials)
  const configParams      = handleObject(config)
  const actionParams      = handleObject(params)
  return `${credentialsParams}${configParams}action=${action}&${actionParams}`
}

module.exports = buildQueryParams
