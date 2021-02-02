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

    // Disable Send Button
    $('input#gdpr').click(function () {
        if ($('button.wpcf7-submit').is(':disabled')) {
            $('button.wpcf7-submit').removeAttr('disabled');
        } else {
            $('button.wpcf7-submit').attr('disabled', 'disabled');
        }
    });

}); // jQuery End