<?php
/* Автономный скрипт. рассылает письма с промокодами-призами */
set_time_limit(0);
ini_set('memory_limit', '512M');
ini_set("display_errors", "On");
error_reporting(E_ALL & ~E_NOTICE);
require_once __DIR__.'/../api/sql.php';


class EmailSender {

  public static function sendRegister($email, $number) {
    $subj = "Поздравляем! Ты в команде #Дылды";
    $path = 'https://'.$_SERVER['HTTP_HOST'].'/mailman/templates';
    
    $fontSize = 42;
    $mb = 36;
    switch(strlen($number.'')) {
      case 3:
        $fontSize = 52;
        $mb = 36;
      break;
      case 2:
        $fontSize = 68;
        $mb = 28;
      break;
      case 1:
        $fontSize = 82;
        $mb = 24;
      break;
    }

    $from = ['{{path}}', '{{number}}', '{{fontSize}}', '{{mb}}'];
    $to = [$path, $number, $fontSize, $mb];

    $tmpl = file_get_contents(__DIR__.'/templates/register.html');
    $tmpl = str_replace($from, $to, $tmpl);

    $response = self::sendEmail($email, $subj, $tmpl);
    $response = json_decode($response, true);
    if(intval($response['status']) == 0) {
      $query = "UPDATE tolls SET email_register_sent = ? WHERE id = ?";
      $time = time();
      SQL::qi($query, [$time, $number]);
    }
  }

  public static function sendFinish() {
    $query = "SELECT id, email FROM tolls";
    $emails = SQL::q($query, []);
    $path = 'https://'.$_SERVER['HTTP_HOST'].'/mailman/templates';
    $subj = "Игра окончена";
    $from = ['{{path}}', '{{number}}'];
    $tmpl = file_get_contents(__DIR__.'/templates/finish.html');
    
    foreach($emails as $e) {
      $tmpl = str_replace($from, [$path, $e['id']], $tmpl);
      
      $response = self::sendEmail($e, $subj, $tmpl);
      $response = json_decode($response, true);
      if(intval($response['status']) == 0) {
        $query = "UPDATE tolls SET email_finish_sent = ? WHERE id = ?";
        $time = time();
        SQL::qi($query, [$time, $e['id']]);
      }
    }
  }

  public static function sendWin($email) {
    $subj = "Поздравляем, Вы - подитель!";
    $tmpl = file_get_contents(__DIR__.'/templates/win.html');

    self::sendEmail($email, $subj, $tmpl);
  }

  public static function sendEmail($email, $subject, $msg){

      $postdata = http_build_query(
          array(
              'api_key'   => '0cff90fe25ff7f8610cf22d3f09f7a66',
              'to'        => $email,
              'subject'   => $subject,
              'html_body' => $msg,
              'timestamp' => date_timestamp_get(date_create()),
          )
      );

      $opts = array('http' =>
          array(
              'method'  => 'POST',
              'header'  => 'Content-type: application/x-www-form-urlencoded',
              'content' => $postdata
          )
      );

      $context  = stream_context_create($opts);

      $result = file_get_contents('http://mailman.alef.im/api/ml-single-send.php', false, $context);
      return $result;
  }

}
