const isArray = require('./validateArray')

const toLines = data => data.trim().split('\r\n')

const getHeaders = data => (
  data.split(';').map(header => header.replace(/"/g, ''))
)

const split = csvText => {
  const lines = toLines(csvText)
  return [lines[0], lines.slice(1)]
}

const formatRow = (row, headers) => {
  const values = row.split(';')
  const object = {}
  headers.forEach((h, i) => {
    const value = values[i].replace(/"/g, '')
    object[h] = value
  })
  return object
}

const handleCsv = data => {
  const [head, rows] = split(data)
  const headers = getHeaders(head)
  return rows.map(r => formatRow(r, headers))
}

const handleData = data => {
  if (isArray(data)) return data
  return handleCsv(data)
}

module.exports = handleData
