'use strict'

const config = require('./../config')
const store = require('../store')

const getHardware = function () {
  // make GET request to /tickets
  // console.log('in getTicket')
  return $.ajax({
    url: config.apiUrl + '/hardware/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const createHardware = function (data) {
  // console.log('new ticket created')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/hardware/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateHardware = function (formData) {
  // console.log('ticket updated')
  return $.ajax({
    url: config.apiUrl + '/hardware/' + formData.hardware.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH', // --> to update
    data: formData
  })
}

// const showTicket = function (formData) {
//   // console.log('ticket shown')
//   return $.ajax({
//     url: config.apiUrl + '/tickets/' + formData.ticket.id,
//     method: 'GET'
//   })
// }

const deleteHardware = function (formData) {
  // console.log('ticket deleted')
  return $.ajax({
    url: config.apiUrl + '/hardware/' + formData.hardware.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE',
    data: formData
  })
}

module.exports = {
  getHardware,
  createHardware,
  updateHardware,
  // showTicket,
  deleteHardware
}
