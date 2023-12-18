/*!
 * bS Contact Form 7
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


// Validation
  document.addEventListener('DOMContentLoaded', function() {
    // Select all forms with the 'wpcf7-form' class
    var forms = document.querySelectorAll('.wpcf7-form');

    // Iterate over each form
    forms.forEach(function(form) {
      // Add the 'needs-validation' class to the form
      form.classList.add('needs-validation');

      // Add the 'novalidate' attribute to disable default browser validation
      form.setAttribute('novalidate', '');

      // Find fields with 'wpcf7-validates-as-required' class and set 'required' attribute
      var requiredFields = form.querySelectorAll('.wpcf7-validates-as-required');
      requiredFields.forEach(function(field) {
        field.setAttribute('required', '');
      });

      // Find acceptance checkboxes excluding those with class 'optional' and set 'required' attribute
      var acceptanceCheckboxes = form.querySelectorAll('.wpcf7-acceptance:not(.optional) .form-check-input');
      acceptanceCheckboxes.forEach(function(checkbox) {
        checkbox.setAttribute('required', '');
      });

      // Find checkboxes within '.wpcf7-checkbox' and exclude those with class 'form-check-input' to make them optional
      var optionalCheckboxes = form.querySelectorAll('.wpcf7-checkbox:not(.wpcf7-exclusive-checkbox) .form-check-input');
      optionalCheckboxes.forEach(function(checkbox) {
        checkbox.removeAttribute('required');
      });

      // Find checkboxes within '.wpcf7-exclusive-checkbox' and set 'required' attribute
      var exclusiveCheckboxes = form.querySelectorAll('.wpcf7-exclusive-checkbox .form-check-input');
      exclusiveCheckboxes.forEach(function(checkbox) {
        checkbox.setAttribute('required', '');
      });

      // Prevent form submission and display validation styles
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      });
    });
  });
