<?php
$number = 5;
  $email = 'kolov@my6mail.com';
    $subj = "Поздравляем! Ты в команде #Дылды";
    $path = 'https://'.$_SERVER['HTTP_HOST'].'/mailman/templates';
    
    $fontSize = 42;
    $mb = 48;
    switch(strlen($number.'')) {
      case 3:
        $fontSize = 52;
        $mb = 42;
      break;
      case 2:
        $fontSize = 68;
        $mb = 30;
      break;
      case 1:
        $fontSize = 82;
        $mb = 36;
      break;
    }

    $from = ['{{path}}', '{{number}}', '{{fontSize}}', '{{mb}}'];
    $to = [$path, $number, $fontSize, $mb];

    $tmpl = file_get_contents(__DIR__.'/templates/register.html');
    $tmpl = str_replace($from, $to, $tmpl);

    require_once __DIR__.'/send_subscr_mail.php';
    $response = EmailSender::sendEmail($email, $subj, $tmpl);
    print_r($response);
