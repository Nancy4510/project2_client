'use strict'

const store = require('../store')
// const config = require('./../config')

const successMessage = function (newText) {
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
  // console.log(data)
  $('#ticket-display').html('')
  data.tickets.forEach(ticket => {
    const ticketHTML = (`
          <h4>Date: ${ticket.date}</h4>
          <h4>Type of Pc: ${ticket.type_of_pc}</h4>
          <h4>Model Number: ${ticket.model_number}</h4>
          <h4>Description: ${ticket.description}<h4>
          <h4>ID: ${ticket.id}</h4>
          <br>
        `)
    $('#ticket-display').append(ticketHTML)
  })
}
// console.log('In onGetTicketSuccess')
// successMessage('Get tickets success')

const onGetTicketFailure = function () {
  // console.log('In onGetTicketFailure')
  successMessage('Get ticket failed!')
}
const onCreateTicketSuccess = function (data) {
  store.ticket = data.ticket
  successMessage('Created ticket successfully!')
  $('form').trigger('reset')
}

const onCreateTicketFailure = function (data) {
  store.ticket = data.ticket
  // console.log(store)
  failureMessage('Created ticket failed')
}

const onUpdateTicketSuccess = function (responseData) {
  store.ticket = responseData.ticket
  // console.log(store)
  $('#ticket-display').html('Your ticket has been updated! Click "View All Tickets" to see the updated changes.')
  successMessage('Updated ticket successfully!')
  $('form').trigger('reset')
}

const onUpdateTicketFailure = function (responsedata) {
  store.ticket = responsedata.ticket
  failureMessage('Update ticket failed')
}

const onDeleteTicketSuccess = function () {
  store.ticket = null
  $('#ticket-display').html("Your ticket has been deleted! Click 'View All Tickets' to see the remaing ticket(s).")
  successMessage('Deleted ticket successfully!')
  $('#delete-ticket').trigger('reset')
}

const onDeleteTicketFailure = function () {
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
