<?php
date_default_timezone_set('Europe/Moscow');

$data = json_decode(file_get_contents('php://input'), true);
echo json_encode($data);
?>