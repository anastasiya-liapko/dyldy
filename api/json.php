<?php

header('Content-type: Application/JSON');
define('DOCUMENT_ROOT', __DIR__);

require_once __DIR__.'/sql.php';

$query = "SELECT `total_toll` AS toll FROM tolls ORDER BY total_toll DESC LIMIT 1";
$result = SQL::q1($query, []);

$query = "SELECT count(*) AS `cnt` FROM tolls";
$count = SQL::q1($query, []);

  die(json_encode([
    'result' => 1,
    'value' => $result['toll'],
    'count' => $count['cnt'],
  ]));

