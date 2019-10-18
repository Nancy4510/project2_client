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
    data: data
  })
}

const updateTicket = function (formData) {
  console.log('ticket updated')
  return $.ajax({
    url: config.apiUrl + '/tickets/' + formData.ticket.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH', // --> to update
    data: formData
  })
}

const showTicket = function (formData) {
  // console.log('ticket shown')
  return $.ajax({
    url: config.apiUrl + '/tickets/' + formData.ticket.id,
    method: 'GET'
  })
}

const deleteTicket = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/tickets/' + formData.ticket.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  getTicket,
  createTicket,
  updateTicket,
  showTicket,
  deleteTicket
}
