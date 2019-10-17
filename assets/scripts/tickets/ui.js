'use strict'

const store = require('../store')

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
  console.log('In onGetTicketSuccess')
  // console.log(data.games.length)
  successMessage('Get tickets success')
}

const onGetTicketFailure = function () {
  console.log('In onGetTicketFailure')
  successMessage('Get games failed!')
}

const onCreateTicketSuccess = function (data) {
  store.ticket = data.ticket
  // console.log(store)
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

module.exports = {
  onGetTicketSuccess,
  onGetTicketFailure,
  onCreateTicketSuccess,
  onCreateTicketFailure,
  onUpdateTicketSuccess,
  onUpdateTicketFailure
}