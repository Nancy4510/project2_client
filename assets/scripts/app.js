'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const ticketsEvents = require('./tickets/events')

$(() => {
  // your JS code goes here
  // FORMS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#create-ticket').on('submit', ticketsEvents.onCreateTicket)
  $('#get-tickets').on('submit', ticketsEvents.onGetTickets)
  $('#update-ticket').on('submit', ticketsEvents.onUpdateTicket)
  $('#delete-ticket').on('submit', ticketsEvents.onDeleteTicket)
  $('.ticketPage').hide()
  $('.update_ticket_div').hide()
  $('.view_tickets_div').hide()
  $('.remove_ticket_div').hide()
  $('.change_password_div').hide()
  $('.signOut').hide()

  $('#btnSignIn').on('click', function (event) {
    $('.sign_in_div').hide()
    $('.sign_up_div').hide()
    $('.ticketPage').show()
    $('.update_ticket_div').show()
    $('.view_tickets_div').show()
    $('.remove_ticket_div').show()
    $('.change_password_div').show()
    $('.signOut').show()

    $('#btn-sign-out').on('click', function (event) {
      $('.sign_in_div').show()
      $('.sign_up_div').show()
      $('.ticketPage').hide()
      $('.update_ticket_div').hide()
      $('.view_tickets_div').hide()
      $('.remove_ticket_div').hide()
      $('.change_password_div').hide()
      $('.signOut').hide()
    })
  })
})
