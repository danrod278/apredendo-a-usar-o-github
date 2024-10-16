'use strict'

const app = require('./config/basic')

require('./config/database')
require('./config/')
require('./config/routes')(app)
require('./config/models')

module.exports = app