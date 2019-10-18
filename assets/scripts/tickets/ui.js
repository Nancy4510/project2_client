'use strict'

const store = require('../store')
const config = require('./../config')

const successMessage = function(newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onGetTicketSuccess = function (data) {
  // config.ticket = data.ticket
  console.log(data)
  $('#ticket-display').html('')

  data.tickets.forEach(ticket => {
    const bookHTML = (`
        <h4>Date: ${ticket.date}</h4>
        <p>Type of Pc: ${ticket.type_of_pc}</p>
        <p>Model Number: ${ticket.model_number}<p>
        <p>Description: ${ticket.description}<p>
        <p>ID: ${ticket.id}</p>
        <br>
      `)
    $('#ticket-display').append(bookHTML)
  })
}
// console.log('In onGetTicketSuccess')
// console.log(data.games.length)
// successMessage('Get tickets success')

const onGetTicketFailure = function () {
  console.log('In onGetTicketFailure')
  successMessage('Get ticket failed!')
}

const onCreateTicketSuccess = function (data) {
  store.ticket = data.ticket
  console.log(store)
  successMessage('Created ticket successfully!')
}

const onCreateTicketFailure = function (data) {
  store.ticket = data.ticket
  // console.log(store)
  failureMessage('Created ticket failed')
}

const onUpdateTicketSuccess = function (responseData) {
  store.ticket = responseData.ticket
  // console.log(store)
  successMessage('Updated ticket successfully!')
}

const onUpdateTicketFailure = function (responseData) {
  store.ticket = responseData.ticket
  failureMessage('Update ticket failed')
}

const onDeleteTicketSuccess = function (responsedata) {
  store.ticket = responsedata.ticket
  // console.log(store)
  successMessage('Deleted ticket successfully!')
}

const onDeleteTicketFailure = function (responsedata) {
  store.ticket = responsedata.ticket
  failureMessage('Delete ticket failed')
}

module.exports = {
  onGetTicketSuccess,
  onGetTicketFailure,
  onCreateTicketSuccess,
  onCreateTicketFailure,
  onUpdateTicketSuccess,
  onUpdateTicketFailure,
  onDeleteTicketSuccess,
  onDeleteTicketFailure
}
