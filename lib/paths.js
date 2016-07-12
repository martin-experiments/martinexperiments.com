'use strict'

const path = require('path')

const LIB = __dirname
const DIST = path.join(__dirname, '..', 'dist')
const FRONTEND = path.join(__dirname, '..', 'frontend')
const BASE_JS = path.join(DIST, 'base.bundle.js')
const FAVICON = path.join(DIST, 'favicon.png')
const APP = path.join(FRONTEND, 'App')
const I18N = path.join(APP, 'i18n')

module.exports = {
  APP
, BASE_JS
, DIST
, FAVICON
, FRONTEND
, I18N
, LIB
}
