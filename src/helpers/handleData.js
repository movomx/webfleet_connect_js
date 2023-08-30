const isArray = require('./validateArray')

const getLines = data => data.trim().split('\r\n')

const getHeaders = data => (
  data.split(';').map(header => header.replace(/"/g, ''))
)

const removeHeaders = data => data.slice(1, data.length)

const handleData = data => {
  if (isArray(data)) return data
  const lines = getLines(data)
  const headers = getHeaders(lines[0])
  const rows = removeHeaders(lines)
  return rows.map(r => {
    const values = r.split(';')
    const object = {}
    headers.forEach((h, hi) => {
      const value =  values[hi].replace(/"/g, '')
      object[h] = value
    })
    return object
  })
}

module.exports = handleData
