'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

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

const onUpdateTicket = function (event) {
  // console.log('In onUpdateTicket')
  // const form = event.target
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.updateTicket(formData)
    .then(ui.onUpdateTicketSuccess)
    .catch(ui.onUpdateTicketFailure)
}

const onDeleteTicket = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)
  api.deleteTicket(formData)
    .then(ui.onDeleteTicketSuccess)
    .catch(ui.onDeleteTicketFailure)
}

module.exports = {
  onGetTickets,
  onCreateTicket,
  onUpdateTicket,
  onDeleteTicket
}
