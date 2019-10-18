'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onGetTickets = function () {
  console.log('In onGetTickets')
  event.preventDefault()
  api.getTicket()
    .then(ui.onGetTicketSuccess)
    .catch(ui.onGetTicketFailure)
}

const onCreateTicket = function (event) {
  console.log('In onCreateeTicket')
  const form = event.target
  event.preventDefault()
  const data = getFormFields(form)
  api.createTicket(data)
    .then(ui.onCreateTicketSuccess)
    .catch(ui.onCreateTicketFailure)
}

const onUpdateTicket = function (responseData) {
  console.log('In onUpdateTicket')
  event.preventDefault()
  api.updateTicket(responseData)
    .then(ui.onUpdateTicketSuccess)
    .catch(ui.onUpdateTicketFailure)
}

module.exports = {
  onGetTickets,
  onCreateTicket,
  onUpdateTicket
}
