<?php
include 'connectdb.php';

header("Access-Control-Allow-Origin: *");

$result = $conn->query(
    "SELECT *" .
    "FROM Patient, Visit;"
);

$tuple = $result->fetchrow();

echo json_encode($tuple);
?>