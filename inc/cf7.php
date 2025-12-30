<?php

/**
 * CF7 scripts
 *
 * @author   Bootscore
 * @package  bs Contact Form 7
 * @version  5.4.1
 */


// Exit if accessed directly
defined('ABSPATH') || exit;


/**
 * Disable Contact Form 7 styles
 */
function bootscore_deregister_cf7_styles() {
  wp_deregister_style( 'contact-form-7' );
}
add_action( 'wp_print_styles', 'bootscore_deregister_cf7_styles', 100 );


/**
 * Remove autop <p> tags (CF7 5.7)
 */
add_filter('wpcf7_autop_or_not', '__return_false');


/**
 * Register styles and scripts
 */
function bootscore_cf7_scripts() {

  // Plugin base path & URL
  $plugin_path = plugin_dir_path( dirname( __FILE__ ) );
  $plugin_url  = plugin_dir_url( dirname( __FILE__ ) );

  // File paths
  $script_file = $plugin_path . 'assets/js/bs-cf7-script.min.js';
  $style_file  = $plugin_path . 'assets/css/bs-cf7-style.min.css';

  // Versions based on file modification time
  $script_ver = file_exists( $script_file ) ? date( 'YmdHi', filemtime( $script_file ) ) : false;
  $style_ver  = file_exists( $style_file ) ? date( 'YmdHi', filemtime( $style_file ) ) : false;

  // Enqueue script
  wp_enqueue_script(
    'bs-cf7-script',
    $plugin_url . 'assets/js/bs-cf7-script.min.js',
    [],
    $script_ver,
    true
  );

  // Enqueue style
  wp_enqueue_style(
    'bs-cf7-style',
    $plugin_url . 'assets/css/bs-cf7-style.min.css',
    [],
    $style_ver
  );
}

add_action( 'wp_enqueue_scripts', 'bootscore_cf7_scripts' );


/**
 * Adjust Contact Form 7 radios and checkboxes to match Bootstrap structure
 */
add_filter('wpcf7_form_elements', function ($content) {
  // Decide if inline or stacked
  $inline = apply_filters('bootscore/cf7/horizontal-checks-radios', true);

  $layout_class = $inline ? 'form-check form-check-inline' : 'form-check';

  $content = preg_replace(
    '/<label><input type="(checkbox|radio)" name="(.*?)" value="(.*?)" \/><span class="wpcf7-list-item-label">/i',
    '<label class="' . $layout_class . ' form-check-\1"><input type="\1" name="\2" value="\3" class="form-check-input"><span class="wpcf7-list-item-label form-check-label">',
    $content
  );

  // Removes wrong classes on type=checkbox
  $content = preg_replace('/wpcf7-checkbox\sform-check-input/i', '', $content);

  return $content;
});
