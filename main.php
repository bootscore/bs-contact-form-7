<?php
/*Plugin Name: bs Contact Form 7
Plugin URI: https://bootscore.me/documentation/bs-contact-form-7/
Description: This plugin adds Bootstrap alerts and checkboxes to Contact Form 7.
Requires Plugins: contact-form-7
Version: 5.4.0
Tested up to: 6.8
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
require 'inc/update/plugin-update-checker.php';
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

$myUpdateChecker = PucFactory::buildUpdateChecker(
	'https://github.com/bootscore/bs-contact-form-7/',
	__FILE__,
	'bs-contact-form-7'
);

//Set the branch that contains the stable release.
$myUpdateChecker->setBranch('main');



/**
 * Load required files
 */
require_once plugin_dir_path( __FILE__ ) . 'inc/cf7.php'; // CF7 scripts
