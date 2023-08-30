const handleCredentials = args => ({
  account:  args.account  || process.env.WEBFLEET_CONNECT_ACCOUNT,
  username: args.username || process.env.WEBFLEET_CONNECT_USERNAME,
  password: args.password || process.env.WEBFLEET_CONNECT_PASSWORD,
  apikey:   args.apikey   || process.env.WEBFLEET_CONNECT_APIKEY
})

module.exports = { handleCredentials }
