jQuery(function ($) {

  /* Validation Events for changing response CSS classes */
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


  // New submit spinner since v5.0.0.4
  $('.wpcf7-submit').prepend('<div class="ajax-loader"><div class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div></div>');

}); // jQuery End
