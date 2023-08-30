const convert = data => {
  if (typeof data === 'string') return data
  return JSON.stringify(data)
}

module.exports = convert
