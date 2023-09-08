/*!
 * bS Contact Form 7
 * 
 * @version 5.2.0
 */


jQuery(function ($) {

  // Validation Events for changing response CSS classes
  document.addEventListener('wpcf7invalid', function (event) {
    $('.wpcf7-response-output').addClass('alert alert-danger');
  }, false);
  
  document.addEventListener('wpcf7spam', function (event) {
    $('.wpcf7-response-output').addClass('alert alert-warning');
  }, false);
  
  document.addEventListener('wpcf7mailfailed', function (event) {
    $('.wpcf7-response-output, .wpcf7-response-output.wpcf7-display-none.wpcf7-acceptance-missing').addClass('alert alert-warning');
  }, false);
  
  document.addEventListener('wpcf7mailsent', function (event) {
    $('.wpcf7-response-output').addClass('alert alert-success');
    $('.wpcf7-response-output').removeClass('alert-danger');
    $('button.wpcf7-submit').attr('disabled', 'disabled');
  }, false);

  // Acceptance
  if (!$('.wpcf7-response-output.wpcf7-display-none').hasClass('wpcf7-acceptance-missing')) {
    $('.wpcf7-response-output.wpcf7-display-none').addClass('alert alert-danger')
  }

  // Validation
  // Dony by CSS via default CF7 validation
  /*
  // Form-control live validation
  $('.wpcf7-form').on('blur change', '.form-control', function () {
    // Get the current input field
    var $inputField = $(this);

    // Check if the input has the CF7 validation class
    if ($inputField.hasClass('wpcf7-not-valid')) {
      // Remove Bootstrap's 'is-valid' class and add 'is-invalid'
      $inputField.removeClass('is-valid');
      $inputField.addClass('is-invalid');
    } else {
      // Remove Bootstrap's 'is-invalid' class and add 'is-valid'
      $inputField.removeClass('is-invalid');
      $inputField.addClass('is-valid');
    }
  });

  // Form-select live validation
  $('.wpcf7-form').on('blur change', 'select', function () {
    // Get the current select field
    var $selectField = $(this);

    // Check if the select field has the CF7 validation class
    if ($selectField.hasClass('wpcf7-not-valid')) {
      // Remove Bootstrap's 'is-valid' class and add 'is-invalid'
      $selectField.removeClass('is-valid');
      $selectField.addClass('is-invalid');
    } else {
      // Remove Bootstrap's 'is-invalid' class and add 'is-valid'
      $selectField.removeClass('is-invalid');
      $selectField.addClass('is-valid');
    }
  });

  // Acceptance validation
  $('.wpcf7-acceptance input:not(.wpcf7-acceptance.optional input)').change(function () {
    if ($(this).is(":checked")) {
      $('.wpcf7-acceptance .form-check-input:not(.wpcf7-acceptance.optional .form-check-input)').removeClass('is-invalid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox:not(.wpcf7-acceptance.optional label.form-check.form-check-checkbox)').removeClass('is-invalid');
      $('.wpcf7-acceptance .form-check-input:not(.wpcf7-acceptance.optional .form-check-input)').addClass('is-valid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox:not(.wpcf7-acceptance.optional label.form-check.form-check-checkbox)').addClass('is-valid');
    } else {
      $('.wpcf7-acceptance .form-check-input:not(.wpcf7-acceptance.optional .form-check-input)').removeClass('is-valid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox:not(.wpcf7-acceptance.optional label.form-check.form-check-checkbox)').removeClass('is-valid');
      $('.wpcf7-acceptance .form-check-input:not(.wpcf7-acceptance.optional .form-check-input)').addClass('is-invalid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox:not(.wpcf7-acceptance.optional label.form-check.form-check-checkbox)').addClass('is-invalid');
    }
  });
    */

  // New submit spinner since v5.0.0.4
  $('.wpcf7-submit').prepend('<div class="ajax-loader"><div class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div></div>');

}); // jQuery End
