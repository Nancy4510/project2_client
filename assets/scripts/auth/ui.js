'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('You signed up successfully! Now you can sign in!')
  // $('.signUp').show()
  $('form').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Sorry, sign up failed. Please try again.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed in Successfully!')
  store.user = responseData.user
  $('.signIn').hide()
  $('form').trigger('reset')
}

const onSignInFailure = function () {
  failureMessage('Please sign up first')
}

const onChangePasswordSuccess = function () {
  successMessage('changed password successfully!')
  $('.changePassword').hide()
  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  failureMessage('change password failed')
}

const onSignOutSuccess = function () {
  successMessage('Signed Out Successfully!')
  $('form').trigger('reset')
}

const onSignOutFailure = function () {
  failureMessage('Sign Out failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
