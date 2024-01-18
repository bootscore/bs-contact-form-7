# bs Contact Form 7

[![Packagist Prerelease](https://img.shields.io/packagist/vpre/bootscore/bs-contact-form-7?logo=packagist&logoColor=fff)](https://packagist.org/packages/bootscore/bs-contact-form-7)
[![Github All Releases](https://img.shields.io/github/downloads/bootscore/bs-contact-form-7/total.svg)](https://github.com/bootscore/bs-contact-form-7/releases)

This plugin adds Bootstrap to radio buttons, checkboxes, alerts and a loading spinner to Contact Form 7. It is an additional plugin and does not replace Contact Form 7.

Demo & documentation: https://bootscore.me/documentation/bs-contact-form-7/

## Installation

1. Download and install [Contact Form 7](https://wordpress.org/plugins/contact-form-7/)
2. Download and install latest release [bs-contact-form-7.zip](https://github.com/bootscore/bs-contact-form-7/releases/latest/download/bs-contact-form-7.zip). 
3. Set up your forms with HTML markup as below and replace your data

## HTML Markup

### Form

```html
<p>Required fields are marked <span class="text-danger">*</span></p>

<div class="row g-3 mb-3">

  <div class="col-lg-6">
    <label class="form-label d-block">Salution <span class="text-danger">*</span></label>
    [checkbox* salution use_label_element exclusive "Mrs." "Mr." "Other"]
  </div>

  <div class="col-lg-6">
    <label class="form-label d-block">Age</label>
    [checkbox age use_label_element exclusive "0-18" "19-29" "30-45" "46-60"]
  </div>

  <div class="col-lg-6">
    <label class="form-label d-block">I'm interested in</label>
    [radio interests use_label_element default:1 "Nothing" "Sports" "Cooking"]
  </div>

  <div class="col-lg-6">
    <label class="form-label d-block">Date</label>
    [date date class:form-control]
  </div>

  <div class="col-md-6">
    <label class="form-label">First name <span class="text-danger">*</span></label>
    [text* first-name class:form-control placeholder "Enter your first name"]
  </div>

  <div class="col-md-6">
    <label class="form-label">Last name <span class="text-danger">*</span></label>
    [text* last-name class:form-control placeholder "Enter your last name"]
  </div>

  <div class="col-md-6">
    <label class="form-label">Email <span class="text-danger">*</span></label>
    [email* your-email class:form-control placeholder "Enter a valid email address"]
  </div>

  <div class="col-md-6">
    <label class="form-label">Where are you from? <span class="text-danger">*</span></label>
    [select* region class:form-select first_as_label "Choose region" "Asia" "Africa" "Europe" "North America" "South America" "Australia/Ocania"]
  </div>

  <div class="col-12">
    <label class="form-label">File upload (.jpg, .jpeg, .png, max-size 3MB)</label>
    [file file-upload class:form-control id:form-file limit:3mb filetypes:jpg|jpeg|png]
  </div>

  <div class="col-12">
    <label class="form-label">Subject</label>
    [text your-subject class:form-control placeholder "Quick summary"]
  </div>

  <div class="col-12">
    <label class="form-label">Message <span class="text-danger">*</span></label>
    [textarea* message class:form-control placeholder "Your message to us"]
  </div>

  <div class="col-12">
    [acceptance newsletter optional] Newsletter [/acceptance]
  </div>

  <div class="col-12">
    [acceptance terms use_label_element]I have read the <a href="#" target="_blank">privacy policy</a> note. I consent to the electronic storage and processing of my entered data to answer my request. Note: You can revoke your consent at any time in the future by emailing <a href="mailto:mail@yourdomain.com">mail@yourdomain.com</a>.[/acceptance]
  </div>

  <div class="col-12">
    <!--
      Default CF7 [submit class:btn class:btn-primary class:w-100 "Send Message"] outputs an <input>:
      <input class="wpcf7-form-control wpcf7-submit has-spinner btn btn-primary w-100" type="submit" value="Send Message">
      Use <button> element to add a spinner.
    -->
    <button type="submit" class="btn btn-primary wpcf7-submit w-100" disabled="disabled">Send Message</button>
  </div>

</div>

```

### Mail recipient

```html
Inquiry contact form on [_site_title] from [salution] [first-name] [last-name].

Contact details:

Salution: [salution]
First name: [first-name]
Last name: [last-name]
Age: [age]
Date: [date]
Interests: [interests]
Email: [your-email]
Region: [region]

Subject: [your-subject]

Message:
[message]

[newsletter]

[terms]
   
-- 
This email was sent from a contact form on [_site_title].

Company name
Street
City

Email: mail@yourdomain.com
Phone: 1234567
```

### Mail sender

```html
Hello [salution] [first-name] [last-name],

thank you for contacting us. We will answer as soon as possible.

Here is a copy of your message to us:

Salution: [salution]
First name: [first-name]
Last name: [last-name]
Age: [age]
Date: [date]
Interests: [interests]
Email: [your-email]
Region: [region]

Subject: [your-subject]

Message:
[message]

[newsletter]

[terms]
   
-- 
This email was sent from a contact form on [_site_title].

Company name
Street
City

Email: mail@yourdomain.com
Phone: 1234567
```


## License & Credits

- Contact Form 7, GNU General Public License (GPL) v2 https://github.com/takayukister/contact-form-7/blob/master/license.txt
- bs Contact Form 7, MIT License https://github.com/bootscore/bs-contact-form-7/blob/main/LICENSE
- Plugin Update Checker, YahnisElsts, MIT License https://github.com/YahnisElsts/plugin-update-checker/blob/master/license.txt
