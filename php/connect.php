<?php
$link = mysql_connect('localhost','pablo','tijuana') or 
	die("cannot connect"); 
mysql_select_db("N_alternatives_sin_escaleras",$link) or 
	die("cannot select DB");
?>
