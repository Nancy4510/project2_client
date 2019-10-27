'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onGetHardware = function () {
  event.preventDefault()
  api.getHardware()
    .then(ui.onGetHardwareSuccess)
    .catch(ui.onGetHardwareFailure)
}

const onCreateHardware = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createHardware(data)
    .then(ui.onCreateHardwareSuccess)
    .catch(ui.onCreateHardwareFailure)
}

const onUpdateHardware = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateHardware(formData)
    .then(ui.onUpdateHardwareSuccess)
    .catch(ui.onUpdateHardwareFailure)
}

const onDeleteHardware = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteHardware(formData)
    .then(ui.onDeleteHardwareSuccess)
    .catch(ui.onDeleteHardwareFailure)
}

module.exports = {
  onGetHardware,
  onCreateHardware,
  onUpdateHardware,
  onDeleteHardware
}
