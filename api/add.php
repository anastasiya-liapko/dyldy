<?php

header('Content-type: Application/JSON');
error_reporting(E_ALL);
ini_set('display_errors', 1);

$email = trim($_POST['email']);
$name = trim($_POST['name']);
$toll = intval($_POST['toll']);
$city = trim($_POST['city']);

if(empty($name) || empty($email) || $toll < 1 || empty($city) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die(json_encode([
    'status' => false,
    'message' => 'Заполните корректно все данные',
  ]));
}

define('DOCUMENT_ROOT', __DIR__);
require_once __DIR__.'/sql.php';

/** Check email for new */
$query = "SELECT id FROM `tolls` WHERE email = ? LIMIT 1";
$exists = SQL::q1($query, [$email]);

if(isset($exists['id']) && intval($exists['id']) > 0) {
    die(json_encode([
    'status' => false,
    'message' => 'Такой E-mail адрес уже зарегистрирован!',
  ]));
}

$query = "SELECT MAX(`total_toll`) AS 'max' FROM `tolls`";
$maxVal = SQL::q1($query, []);

$query = "INSERT INTO `tolls` SET `name` = ?, `email` = ?, `city` = ?, `toll` = ?, `total_toll` = ?";
$teamID = SQL::qi($query, [$name, $email, $city, $toll, ($maxVal['max'] + $toll)]);

if($teamID) {
  $query = "SELECT `total_toll` AS toll FROM tolls ORDER BY total_toll DESC LIMIT 1";
  $result = SQL::q1($query, []);

  /** Send email */
  require_once __DIR__.'/../mailman/send_subscr_mail.php';
  EmailSender::sendRegister($email, $teamID);

  die(json_encode([
    'status' => true,
    'value' => $teamID,
    'toll' => $result['toll'],
  ]));
}
else {
  die(json_encode([
    'status' => false,
    'message' => 'Произошла ошибка. Попробуйте еще раз.',
  ]));
}


