<?php
function connection(){
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "user";

    $conn= new mysqli($host,$username,$password,$database);

    if($conn->connect_errno){
        die("Connection failed: " . $conn->connect_error);
    }else{
        return $conn;
    }
}
?>