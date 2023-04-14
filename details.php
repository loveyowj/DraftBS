<?php
include_once("connections/connection.php");
$conn = connection();

if(!isset($_SESSION)){
    session_start();
}

if(isset($_SESSION['Access']) && $_SESSION['Access'] == 'administrator'){
    echo "Welcome ".$_SESSION['UserLogin'];
}else{
    echo header("Location: index.php");
}
?>