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

const onGetHardwareSuccess = function (data) {
  if (data.hardware.length === 0) {
    $('#ticket-display').html('Please create a hardware first to view all your tickets')
  } else {
    // config.ticket = data.ticket
    // console.log(data)
    successMessage('Viewing all hardware successfully!')
    $('#hardware-display').html('')
    data.hardware.forEach(ticket => {
      const hardwareHTML = (`
          <h4>Date: ${ticket.date}</h4>
          <h4>Name of Hardware: ${ticket.type_of_pc}</h4>
          <h4>Processor Speed: ${ticket.model_number}</h4>
          <h4>Memory: ${ticket.description}<h4>
          <h4>Serial Number: ${ticket.description}<h4>
          <h4>ID: ${ticket.id}</h4>
          <br>
        `)
      $('#hardware-display').append(hardwareHTML)
    })
  }
}
// console.log('In onGetTicketSuccess')
// successMessage('Get tickets success')

const onGetHardwareFailure = function () {
  // console.log('In onGetTicketFailure')
  successMessage('Get hardware failed!')
}
const onCreateHardwareSuccess = function (data) {
  store.hardware = data.hardware
  successMessage('Created hardware successfully!')
  $('form').trigger('reset')
}

const onCreateHardwareFailure = function (data) {
  store.hardware = data.hardware
  // console.log(store)
  failureMessage('Created hardware failed')
}

const onUpdateHardwareSuccess = function (responseData) {
  store.hardware = responseData.hardware
  // console.log(store)
  $('#ticket-display').html('Your hardware has been updated! Click "View All Hardware" to see the updated changes.')
  successMessage('Updated hardware successfully!')
  $('form').trigger('reset')
}

const onUpdateHardwareFailure = function (responsedata) {
  store.hardware = responsedata.hardware
  failureMessage('Update hardware failed')
}

const onDeleteHardwareSuccess = function () {
  store.hardware = null
  $('#ticket-display').html("Your hardware has been deleted! Click 'View All Hardware' to see any remaing hardware.")
  successMessage('Deleted hardware successfully!')
  $('#delete-ticket').trigger('reset')
}

const onDeleteHardwareFailure = function () {
  failureMessage('Delete hardwarefailed')
}

module.exports = {
  onGetHardwareSuccess,
  onGetHardwareFailure,
  onCreateHardwareSuccess,
  onCreateHardwareFailure,
  onUpdateHardwareSuccess,
  onUpdateHardwareFailure,
  onDeleteHardwareSuccess,
  onDeleteHardwareFailure
}
