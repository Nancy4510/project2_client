'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onGetHardare = function () {
  event.preventDefault()
  api.getHardare()
    .then(ui.onGetHardareSuccess)
    .catch(ui.onGetHardareFailure)
}

const onCreateHardare = function (event) {
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createHardare(data)
    .then(ui.onCreateHardareSuccess)
    .catch(ui.onCreateHardareFailure)
}

const onUpdateHardare = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateHardare(formData)
    .then(ui.onUpdateHardareSuccess)
    .catch(ui.onUpdateHardareFailure)
}

const onDeleteHardare = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteHardare(formData)
    .then(ui.onDeleteHardareSuccess)
    .catch(ui.onDeleteHardareFailure)
}

module.exports = {
  onGetHardare,
  onCreateHardare,
  onUpdateHardare,
  onDeleteHardare
}
