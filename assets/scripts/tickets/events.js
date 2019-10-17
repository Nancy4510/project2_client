'use strict'
// const getformFields = require('../../../lib/get-form-fields.js')
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

const onCreateTicket = function (data) {
  console.log('In onCreateeTicket')
  event.preventDefault()
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
