'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const ticketsEvents = require('./tickets/events')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-ticket').on('submit', ticketsEvents.onCreateTicket)
  $('#get-tickets').on('submit', ticketsEvents.onGetTickets)
  $('#update-ticket').on('submit', ticketsEvents.onUpdateTicket)
  $('#delete-ticket').on('submit', ticketsEvents.onDeleteTicket)
  $('.ticketPage').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.ticketPage').show()
    $('.changePassword').show()
    $('.signOut').show()
    $('.signIn').hide()
    $('.signUp').hide()

    $('#btnSignOut').on('click', function (event) {
      $('.ticketPage').hide()
      $('.changePassword').hide()
      $('.signOut').hide()
      $('.signUp').show()
      $('.signIn').show()
    })
  })
})
