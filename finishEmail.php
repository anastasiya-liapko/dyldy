<?php
set_time_limit(0);
ini_set('memory_limit', '512M');
ini_set("display_errors", "On");
error_reporting(E_ALL & ~E_NOTICE);

if($_GET['key'] !== '3128887682') die('Access deniened');

define('DOCUMENT_ROOT', __DIR__.'/api/');
/** Send email */
require_once __DIR__.'/mailman/send_subscr_mail.php';
EmailSender::sendFinish();
