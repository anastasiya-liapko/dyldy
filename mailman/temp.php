<?php
die();
$number = 5;
$subj = "Поздравляем! Ты в команде #Дылды";
$path = 'http://'.$_SERVER['HTTP_HOST'].'/mailman/templates';

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

echo $tmpl;