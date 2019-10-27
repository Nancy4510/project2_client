'use strict'

const config = require('./../config')
const store = require('../store')

const getHardware = function () {
  // make GET request to /harwares
  // console.log('in getHardware')
  return $.ajax({
    url: config.apiUrl + '/hardwares/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const createHardware = function (data) {
  // console.log('new hardware created')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/hardwares/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateHardware = function (formData) {
  // console.log('hardware updated')
  return $.ajax({
    url: config.apiUrl + '/hardwares/' + formData.hardware.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH', // --> to update
    data: formData
  })
}

// const showHardware = function (formData) {
//   // console.log('hardware shown')
//   return $.ajax({
//     url: config.apiUrl + '/hardwares/' + formData.ticket.id,
//     method: 'GET'
//   })
// }

const deleteHardware = function (formData) {
  // console.log('hardware deleted')
  return $.ajax({
    url: config.apiUrl + '/hardwares/' + formData.hardware.id,
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
  // showHardware,
  deleteHardware
}
