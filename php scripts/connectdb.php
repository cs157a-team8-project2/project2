<?php

// Create connection to Oracle
$conn = oci_connect("albert", "levan", "//localhost/xe");
if (!$conn) {
	$m = oci_error();
	echo $m['message'], "\n";
	exit;
}
else {
	print "Connected to Oracle";
}

?>