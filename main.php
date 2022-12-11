<?php
/**
 * Plugin Name: bS Contact Form 7
 * Plugin URI: https://bootscore.me/plugins/bs-contact-form-7/
 * Description: Adds Bootstrap 5 alerts and checkboxes to Contact Form 7. It´s an additional plugin and needs <a href="https://wordpress.org/plugins/contact-form-7/">CF7</a> to work.
 * Author: bootScore
 * Author URI: https://bootscore.me
 * Version: 5.0.0.4
 */


// Update checker
require 'update/update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
  'https://bootscore.me/wp-content/plugins/bs-contact-form-7-main/update/plugin.json',
  __FILE__, //Full path to the main plugin file or functions.php.
  'bs-contact-form-7-main'
);

// Register Styles and Scripts
function contact_scripts() {
    
  wp_enqueue_script( 'contactform-script', plugins_url( '/js/contactform-script.js' , __FILE__ ), array( 'jquery' ), '1.0', true );

  wp_register_style( 'contactform-style', plugins_url('css/contactform-style.css', __FILE__) );
      wp_enqueue_style( 'contactform-style' );
  }

add_action('wp_enqueue_scripts','contact_scripts');

//Adjust contact form 7 radios and checkboxes to match bootstrap 4 custom radio structure.
add_filter('wpcf7_form_elements', function ($content) {
  $content = preg_replace('/<label><input type="(checkbox|radio)" name="(.*?)" value="(.*?)" \/><span class="wpcf7-list-item-label">/i', '<label class="form-check form-check-inline form-check-\1"><input type="\1" name="\2" value="\3" class="form-check-input"><span class="wpcf7-list-item-label form-check-label">', $content);

  return $content;
});

// Disable Contact Form 7 Styles
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
  wp_deregister_style( 'contact-form-7' );
}

// Remove <p> tags (CF7 5.7)
add_filter('wpcf7_autop_or_not', '__return_false');