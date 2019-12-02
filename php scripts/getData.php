<?php
include 'connectdb.php';

header("Access-Control-Allow-Origin: *");


$p = oci_parse($conn, 'SELECT * FROM Patient, Visit');
$result = oci_execute($p);

$tuple = oci_fetch_array($p);


echo json_encode($tuple);

oci_free_statement($p);
oci_close($conn);
?>