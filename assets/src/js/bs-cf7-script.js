/*!
 * bs Contact Form 7
 * @version 5.4.0
 */

// ====================
// Response Alerts
// ====================

['wpcf7invalid', 'wpcf7spam', 'wpcf7mailfailed', 'wpcf7mailsent'].forEach(evt => {
  document.addEventListener(evt, function (event) {
    const form = event.target;
    const responseOutput = form.querySelector('.wpcf7-response-output');
    if (!responseOutput) return;

    // Reset classes
    responseOutput.className = 'wpcf7-response-output'; // wipe everything back to base

    // Always add base
    responseOutput.classList.add('alert', 'alert-icon');

    // Switch cases
    if (evt === 'wpcf7invalid') {
      responseOutput.classList.add('alert-danger', 'alert-danger-icon');
    }
    if (evt === 'wpcf7spam' || evt === 'wpcf7mailfailed') {
      responseOutput.classList.add('alert-warning', 'alert-warning-icon');
    }
    if (evt === 'wpcf7mailsent') {
      responseOutput.classList.add('alert-success', 'alert-success-icon');

      // Disable submit button in this form only
      const submitButton = form.querySelector('button.wpcf7-submit');
      if (submitButton) submitButton.disabled = true;

      // Reset validation state
      form.classList.remove('was-validated');
    }
  }, false);
});


// ====================
// Bootstrap Validation (was-validated)
// ====================

// See https://getbootstrap.com/docs/5.3/forms/validation/#custom-styles
// Example JS validation works not for checks and radios because CF7 marks all of them as :valid for whatever reason
// So, checks and radios are marked as :invalid via CSS
// See https://github.com/bootscore/bs-contact-form-7/pull/21
(() => {
  'use strict';
  document.querySelectorAll('.wpcf7-form').forEach(form => {
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
  const form = event.target;
  const button = form.querySelector('.wpcf7-submit');

  if (!button || button.querySelector('.ajax-loader')) return; // avoid duplicates

  const loaderDiv = document.createElement('div');
  loaderDiv.classList.add('ajax-loader');

  const spinnerDiv = document.createElement('div');
  spinnerDiv.classList.add('spinner-border', 'spinner-border-sm');
  spinnerDiv.setAttribute('role', 'status');
  spinnerDiv.setAttribute('aria-hidden', 'true');

  loaderDiv.appendChild(spinnerDiv);
  button.insertBefore(loaderDiv, button.firstChild);

  // Force immediate render
  loaderDiv.offsetHeight;
}, false);
