<?php

header('Content-type: Application/JSON');
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (!isset($_POST['email']) || !isset($_POST['name']) || !isset($_POST['toll']) || !isset($_POST['city'])){
  die(json_encode([
    'status' => false,
    'message' => 'Заполните корректно все данные',
  ]));
}

$email = trim($_POST['email']);
$name = trim($_POST['name']);
$toll = intval($_POST['toll']);
$city = trim($_POST['city']);
$sig = (isset($_POST['sig']))?$_POST['sig']:"";

$debugMode = (isset($_POST['debug']))?$_POST['debug']:0;
$info_md5 = md5($_POST['toll'] . $_POST['email'] . 'fnuwuqqxweu23c23f');
if($debugMode == 0 && $info_md5 != $sig) {
  die(json_encode([
    'status' => false,
    'message' => 'Заполните корректно все данные',
  ]));
}

if(empty($name) || empty($email) || $toll < 140 || $toll > 205 || empty($city) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
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

if(!empty($_SERVER['HTTP_CLIENT_IP'])){
    //ip from share internet
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
    //ip pass from proxy
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else{
    $ip = $_SERVER['REMOTE_ADDR'];
}

$query = "INSERT INTO `tolls` SET `name` = ?, `email` = ?, `city` = ?, `toll` = ?, `total_toll` = ?, `ip` = ?";
$teamID = SQL::qi($query, [$name, $email, $city, $toll, ($maxVal['max'] + $toll), $ip]);

if($teamID) {
  $query = "SELECT `total_toll` AS toll FROM tolls ORDER BY total_toll DESC LIMIT 1";
  $result = SQL::q1($query, []);

  if(!$_POST['debug'] || $_POST['debug'] != 1) {
    /** Send email */
    require_once __DIR__.'/../mailman/send_subscr_mail.php';
    EmailSender::sendRegister($email, $teamID);
  }

  die(json_encode([
    'status' => true,
    'value' => $teamID,
    'toll' => $result['toll'],
    'prev' => ($result['toll'] - $toll),
  ]));
}
else {
  die(json_encode([
    'status' => false,
    'message' => 'Произошла ошибка. Попробуйте еще раз.',
  ]));
}
