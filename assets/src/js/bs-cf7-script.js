/*!
 * bs Contact Form 7
 * 
 * @version 5.2.0
 */

// Validation Events for changing response CSS classes
document.addEventListener('wpcf7invalid', function (event) {
  var form = event.target; // Get the form that triggered the event
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.add('alert', 'alert-danger');
}, false);

document.addEventListener('wpcf7spam', function (event) {
  var form = event.target; // Get the form that triggered the event
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger');
  responseOutput.classList.add('alert', 'alert-warning');
}, false);

document.addEventListener('wpcf7mailfailed', function (event) {
  var form = event.target; // Get the form that triggered the event
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger');
  responseOutput.classList.add('alert', 'alert-warning');
}, false);

document.addEventListener('wpcf7mailsent', function (event) {
  var form = event.target; // Get the form that triggered the event
  var responseOutput = form.querySelector('.wpcf7-response-output');
  responseOutput.classList.remove('alert-danger', 'alert-warning');
  responseOutput.classList.add('alert', 'alert-success');
  
  // Disable submit button
  var submitButton = form.querySelector('button.wpcf7-submit');
  submitButton.disabled = true;
}, false);


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
