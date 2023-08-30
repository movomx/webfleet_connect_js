const axios = require('axios')

const URL = 'https://csv.webfleet.com/extern?'

const connection = async parameters => await axios.get(`${URL}${parameters}`)

module.exports = connection
