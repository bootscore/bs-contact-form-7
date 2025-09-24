/*!
 * bs Contact Form 7
 * @version 5.4.0
 */


// ====================
// Response Alerts
// ====================
document.addEventListener('wpcf7invalid', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  if (responseOutput) responseOutput.classList.add('alert', 'alert-danger');
}, false);

document.addEventListener('wpcf7spam', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  if (responseOutput) {
    responseOutput.classList.remove('alert-danger');
    responseOutput.classList.add('alert', 'alert-warning');
  }
}, false);

document.addEventListener('wpcf7mailfailed', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  if (responseOutput) {
    responseOutput.classList.remove('alert-danger');
    responseOutput.classList.add('alert', 'alert-warning');
  }
}, false);

document.addEventListener('wpcf7mailsent', function (event) {
  var form = event.target;
  var responseOutput = form.querySelector('.wpcf7-response-output');
  if (responseOutput) {
    responseOutput.classList.remove('alert-danger', 'alert-warning');
    responseOutput.classList.add('alert', 'alert-success');
  }

  // Disable submit button
  var submitButton = form.querySelector('button.wpcf7-submit');
  if (submitButton) submitButton.disabled = true;

  // Reset validation state
  form.classList.remove('was-validated');
}, false);


// ====================
// Bootstrap Validation (was-validated)
// ====================
(() => {
  'use strict';
  const forms = document.querySelectorAll('.wpcf7-form');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();


// ====================
// Spinner for Submit Button
// ====================
document.addEventListener('wpcf7beforesubmit', function(event) {
  var form = event.target;
  var button = form.querySelector('.wpcf7-submit');

  if (!button || button.querySelector('.ajax-loader')) return; // avoid duplicates

  var loaderDiv = document.createElement('div');
  loaderDiv.classList.add('ajax-loader');

  var spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner-border', 'spinner-border-sm');
  spinnerDiv.setAttribute('role', 'status');
  spinnerDiv.setAttribute('aria-hidden', 'true');

  loaderDiv.appendChild(spinnerDiv);
  button.insertBefore(loaderDiv, button.firstChild);

  // Force immediate render
  loaderDiv.offsetHeight;
}, false);
