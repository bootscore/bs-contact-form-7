<?php
/*Plugin Name: bs Contact Form 7
Plugin URI: https://bootscore.me/documentation/bs-contact-form-7/
Description: This plugin adds Bootstrap alerts and checkboxes to Contact Form 7.
Requires Plugins: contact-form-7
Version: 5.3.4
Tested up to: 6.6
Requires at least: 5.0
Requires PHP: 7.4
Author: Bootscore
Author URI: https://bootscore.me
License: MIT License
 */


// Exit if accessed directly
defined( 'ABSPATH' ) || exit;


/**
 * Update checker
 */
require 'update/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/bootscore/bs-contact-form-7/',
	__FILE__,
	'bs-contact-form-7'
);

//Set the branch that contains the stable release.
$myUpdateChecker->setBranch('main');


/**
 * Register styles and scripts
 */
function contact_scripts() {
    
  wp_enqueue_script('bs-cf7-script.js', plugins_url('/assets/js/bs-cf7-script.min.js', __FILE__), array(), false, true);

  wp_register_style('bs-cf7-style.css', plugins_url('/assets/css/bs-cf7-style.min.css', __FILE__));
    wp_enqueue_style('bs-cf7-style.css');
  }

add_action('wp_enqueue_scripts','contact_scripts');


/**
 * Adjust Contact Form 7 radios and checkboxes to match bootstrap custom radio structure
 */
add_filter('wpcf7_form_elements', function ($content) {
  $content = preg_replace('/<label><input type="(checkbox|radio)" name="(.*?)" value="(.*?)" \/><span class="wpcf7-list-item-label">/i', '<label class="form-check form-check-inline form-check-\1"><input type="\1" name="\2" value="\3" class="form-check-input"><span class="wpcf7-list-item-label form-check-label">', $content);
  $content = preg_replace('/wpcf7-checkbox\sform-check-input/i', '', $content); //removes wrong classes on type=checkbox

  return $content;
});


/**
 * Disable Contact Form 7 styles
 */
add_action( 'wp_print_styles', 'wps_deregister_styles', 100 );
function wps_deregister_styles() {
  wp_deregister_style( 'contact-form-7' );
}


/**
 * Remove <p> tags (CF7 5.7)
 */
add_filter('wpcf7_autop_or_not', '__return_false');
