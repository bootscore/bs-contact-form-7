# bS Contact Form 7

This plugin adds Bootstrap to radio buttons, checkboxes, alerts and a loading spinner to Contact Form 7. It is an additional plugin and does not replace Contact Form 7.

Demo: https://bootscore.me/plugins/bs-contact-form-7/

Documentation: https://bootscore.me/documentation/bs-contact-form-7/

## Installation

1. Download and install [Contact Form 7](https://wordpress.org/plugins/contact-form-7/)
2. Download and install this Support plugin for it
3. Setup your forms with HTML markup like below and replace with your data.
4. Do not change the `id="gdpr"` of the acceptance and the `class="wpcf7-submit"` of the send button. Otherwise it will not work. When change this, you have to adjust it in the plugins folder js/contactform-script.js in lines 16 and 33 – 48.

## HTML Markup

### Form

```html
<p>Required fields are marked *</p>

<div class="row g-3 mb-3">

  <div class="col-12">
    [radio radio-gender use_label_element default:1 "Mrs." "Mr." "Other"]
  </div>

  <div class="col-md-6">
    [text* your-name class:form-control placeholder "Name*"]
  </div>

  <div class="col-md-6">
    [email* your-email class:form-control placeholder "Email*"]
  </div>

  <div class="col-md-6">
    [select* menu-592 class:form-select first_as_label "Option" "1" "2" "3" "4" "5"]
  </div>

  <div class="col-md-6">
    [file file-388 class:form-control id:form-file limit:5mb filetypes:jpg|jpeg|JPEG|png]
  </div>

  <div class="col-12">
    [text your-subject class:form-control placeholder "Subject"]
  </div>

  <div class="col-12">
    [textarea your-message class:form-control placeholder "Message"]
  </div>

</div>

<p>[acceptance acceptance-789 id:gdpr class:form-check-input use_label_element]I have read the <a href="https://yourdomain.com/privacy-policy/" target="_blank">privacy policy</a> note. I consent to the electronic storage and processing of my entered data to answer my request. Note: You can revoke your consent at any time in the future by emailing <a href="mailto:mail@yourdomain.com">mail@yourdomain.com</a>.[/acceptance]</p>

<p><button type="submit" class="btn btn-primary w-100 wpcf7-submit" disabled="disabled">Send Message</button></p>
```

### Mail recipient

```html
<h1>Inquiry contact form on [_site_title]</h1>
<h2>Contact details</h2>
<strong>Gender:</strong> [radio-gender]
<strong>Name:</strong> [your-name]
<strong>Email:</strong> [your-email]
<strong>Option:</strong> [menu-592]
<strong>File:</strong> [file-388]
<strong>Subject:</strong> [your-subject]
<strong>Message:</strong> 
[your-message]
   
-- 
This email was sent from a contact form on [_site_title]

Company name
Street
City

Email: mail@yourdomain.com
Phone: 1234567
```

### Mail sender

```html
Hello [your-name],

thank you for contacting us. We will answer you as soon as possible.

Here is a copy of your message to us:

<h2>Contact details</h2>
<strong>Gender:</strong> [radio-gender]
<strong>Name:</strong> [your-name]
<strong>Email:</strong> [your-email]
<strong>Option:</strong> [menu-592]
<strong>File:</strong> [file-388]
<strong>Subject:</strong> [your-subject]
<strong>Message:</strong> 
[your-message]
   
-- 
This email was sent from a contact form on [_site_title]

Company name
Street
City

Email: mail@yourdomain.com
Phone: 1234567
```


## License & Credits

- Contact Form 7, GNU General Public License (GPL) v2 https://github.com/takayukister/contact-form-7/blob/master/license.txt
- bS Contact Form 7, MIT License https://github.com/bootscore/bs-contact-form-7/blob/main/LICENSE
- Plugin Update Checker, YahnisElsts, MIT License https://github.com/YahnisElsts/plugin-update-checker/blob/master/license.txt
