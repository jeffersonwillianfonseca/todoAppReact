const server = require('../src/config/server')
require('../src/config/database')
require('./config/routes')(server)