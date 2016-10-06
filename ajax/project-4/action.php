<?php
echo 'Hello world ';
if( isset( $_POST['email'] ) )
{

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$department = $_POST['department'];
$address = $_POST['address'];
$password = $_POST['password'];
$status = 1;
$insert_date_time = date('Y-m-d H:i:s');
$update_date_time = date('Y-m-d H:i:s');

$host = 'localhost';
$user = 'root';
$pass = ' ';

mysql_connect($host, $user, $pass);

mysql_select_db('angularjs');

$insertdata=" INSERT INTO user_info VALUES('$full_name','$email','$phone_number','$department', '$address','$password','$status','$insert_date_time','$update_date_time') ";
mysql_query($insertdata);



}

