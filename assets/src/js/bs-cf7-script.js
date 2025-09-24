/*!
 * bs Contact Form 7
 * 
 * @version 5.4.0
 */

// Validation Events for changing response CSS classes
document.addEventListener('wpcf7invalid', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.add('alert', 'alert-danger');
}, false);

document.addEventListener('wpcf7spam', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger');
  responseOutput.classList.add('alert', 'alert-warning');
}, false);

document.addEventListener('wpcf7mailfailed', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger');
  responseOutput.classList.add('alert', 'alert-warning');
}, false);

document.addEventListener('wpcf7mailsent', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger', 'alert-warning');
  responseOutput.classList.add('alert', 'alert-success');

  // Disable submit button
  var submitButton = form.querySelector('button.wpcf7-submit');
  if (submitButton) {
    submitButton.disabled = true;
  }

  // Reset validation state
  form.classList.remove('was-validated');
}, false);


// Validation
// See https://getbootstrap.com/docs/5.3/forms/validation/#custom-styles
// Example starter JavaScript for disabling form submissions if there are invalid fields
// Works not for checks and radios because CF7 marks all of them an :valid for whatever reason
// So, checks and radios are marked as :invalid via CSS
// See https://github.com/bootscore/bs-contact-form-7/pull/21
(() => {
  'use strict'

  const forms = document.querySelectorAll('.wpcf7-form')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();


// Spinner to submit button when submitting
// [submit class:btn class:btn-primary class:w-100 "Send Message"] results in <input>
// <input class="wpcf7-form-control wpcf7-submit btn btn-primary w-100" type="submit" value="Send Message" disabled="">

// Use <button> instead shortcode in forms HTML to add a spinner 
// <button type="submit" class="btn btn-primary wpcf7-submit w-100" disabled="disabled">Send Message</button>

var submitButtons = document.querySelectorAll('.wpcf7-submit');

submitButtons.forEach(function(button) {
  var loaderDiv = document.createElement('div');
  loaderDiv.classList.add('ajax-loader');
  
  var spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner-border', 'spinner-border-sm');
  spinnerDiv.setAttribute('role', 'status');
  spinnerDiv.setAttribute('aria-hidden', 'true');
  
  loaderDiv.appendChild(spinnerDiv);
  
  button.insertBefore(loaderDiv, button.firstChild);
});
