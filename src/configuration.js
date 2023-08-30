const handleConfiguration = args => ({
  lang:         args.lang         || 'en',
  outputformat: args.outputformat || 'csv',
  useISO8601:   args.useISO8601   || false,
  useUTF8:      args.useUTF8      || false
})

module.exports = { handleConfiguration }
