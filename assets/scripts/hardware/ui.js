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
  if (data.hardwares.length === 0) {
    $('#hardware-display').html('Please create a hardware first to view all your hardware')
  } else {
    successMessage('Viewing all hardware successfully!')
    $('#hardware-display').html('')
    data.hardwares.forEach(hardware => {
      const hardwareHTML = (`
          <h4>Date: ${hardware.date}</h4>
          <h4>Name of Hardware: ${hardware.name_of_hardware}</h4>
          <h4>Processor Speed: ${hardware.processor_speed}</h4>
          <h4>Memory: ${hardware.memory}<h4>
          <h4>Serial Number: ${hardware.serial_number}<h4>
          <h4>ID: ${hardware.id}</h4>
          <br>
        `)
      $('#hardware-display').append(hardwareHTML)
    })
  }
}
// console.log('In onGetHardwareSuccess')
// successMessage('Get hardware success')

const onGetHardwareFailure = function () {
  // console.log('In onGetHardwareFailure')
  successMessage('Get hardware failed!')
}
const onCreateHardwareSuccess = function (data) {
  store.hardware = data.hardware
  successMessage('Created hardware successfully!')
  $('#hardware-display').html('To view your hardware you just created, just click "View All Hardware" to see your hardware.')
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
  $('#hardware-display').html('Your hardware has been updated! Click "View All Hardware" to see the updated changes.')
  successMessage('Updated hardware successfully!')
  $('form').trigger('reset')
}

const onUpdateHardwareFailure = function (responsedata) {
  store.hardware = responsedata.hardware
  failureMessage('Update hardware failed')
}

const onDeleteHardwareSuccess = function () {
  store.hardware = null
  $('#hardware-display').html("Your hardware has been deleted! Click 'View All Hardware' to see any remaing hardware.")
  successMessage('Deleted hardware successfully!')
  $('#delete-hardware').trigger('reset')
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
