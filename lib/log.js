'use strict'

const PREFIX = 'me'

const debug = require('debug')

const SUBSYSTEMS = [
  'contentManager'
, 'httpServer'
, 'server'
, 'web'
, 'webSocket'
]

function subsystemIterator(subsystem) {
  exports[subsystem] = debug(`${PREFIX}:${subsystem}`)
}

SUBSYSTEMS.forEach(subsystemIterator)
