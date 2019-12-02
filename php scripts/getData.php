<?php
include 'connectdb.php';

header("Access-Control-Allow-Origin: *");


$p = oci_parse($conn, 'SELECT * FROM Patient, Visit');
$result = oci_execute($p);

$tuple = oci_fetch_array($result);


echo json_encode($tuple);
?>