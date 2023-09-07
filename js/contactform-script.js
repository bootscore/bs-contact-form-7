jQuery(document).ready(function ($) {

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



  /*
  document.addEventListener('wpcf7invalid', function (event) {
    $('label.form-check.form-check-checkbox').addClass('not-valid');
  }, false);
  document.addEventListener('wpcf7mailsent', function (event) {
    $('label.form-check.form-check-checkbox').removeClass('not-valid checked');
  }, false);

  $('input#gdpr').change(function () {
    if ($(this).is(":checked")) {
      $('label.form-check.form-check-checkbox').addClass('checked');
    } else {
      $('label.form-check.form-check-checkbox.not-valid').removeClass('checked');
    }
  });
  */

  /*
    $('input#gdpr').change(function () {
    if ($(this).is(":checked")) {
            $('.form-check-input').removeClass('is-invalid');
      $('label.form-check.form-check-checkbox').removeClass('is-invalid');
      $('.form-check-input').addClass('is-valid');
      $('label.form-check.form-check-checkbox').addClass('is-valid');
    } else {
      $('.form-check-input').removeClass('is-valid');
      $('label.form-check.form-check-checkbox').removeClass('is-valid');
            $('.form-check-input').addClass('is-invalid');
      $('label.form-check.form-check-checkbox').addClass('is-invalid');
    }
  });
*/

  $('.wpcf7-acceptance input').change(function () {
    if ($(this).is(":checked")) {
      $('.wpcf7-acceptance .form-check-input').removeClass('is-invalid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox').removeClass('is-invalid');
      $('.wpcf7-acceptance .form-check-input').addClass('is-valid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox').addClass('is-valid');
    } else {
      $('.wpcf7-acceptance .form-check-input').removeClass('is-valid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox').removeClass('is-valid');
      $('.wpcf7-acceptance .form-check-input').addClass('is-invalid');
      $('.wpcf7-acceptance label.form-check.form-check-checkbox').addClass('is-invalid');
    }
  });


  // Disable Send Button
  $('input#gdpr').click(function () {
    if ($('button.wpcf7-submit').is(':disabled')) {
      $('button.wpcf7-submit').removeAttr('disabled');
    } else {
      $('button.wpcf7-submit').attr('disabled', 'disabled');
    }
  });

  // New submit spinner since v5.0.0.4
  $('.wpcf7-submit').prepend('<div class="ajax-loader"><div class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div></div>');

}); // jQuery End
