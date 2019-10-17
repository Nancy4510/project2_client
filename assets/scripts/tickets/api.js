'use strict'

const config = require('./../config')
const store = require('../store')

const getTicket = function () {
  // make GET request to /tickets
  console.log('in getTicket')
  return $.ajax({
    url: config.apiUrl + '/tickets/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'GET'
  })
}

const createTicket = function (data) {
  console.log('new ticket created')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/tickets/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateTicket = function (data) {
  console.log('ticket updated')
  return $.ajax({
    url: config.apiUrl + '/tickets/' + data.ticket.id,
    method: 'PATCH', // --> to update
    data: data
  })
}

const showTicket = function (data) {
  // console.log('game shown')
  return $.ajax({
    url: config.apiUrl + '/tickets/' + data.ticket.id,
    method: 'GET'
  })
}

module.exports = {
  getTicket,
  createTicket,
  updateTicket,
  showTicket
}