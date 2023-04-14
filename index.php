<?php
if (!isset($_SESSION)){
    session_start();
}
include_once("connections/connection.php");
$con=connection();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Brightside</title>
    <link rel = "stylesheet" href = "css/index_style.css">
</head>
<body>
<section>
    <img src = "img/bg2.jpg" class = "bg">
        <div class = "front">
            <img src = "img/name_home.png" class = "name">
            <h1> study in one place </h1>
            <p> Brightside embraces minimal yet productive environment.
            <br>One website stop for your needs in finishing tasks.</p>
            <div class = "group">
                <?php if(isset($_SESSION['UserLogin'])){?>
                    <button><a href = "logout.php"> Log Out </a></button>
                <?php } else{?>
                    <button><a href = "login.php"> Get Started </a></button>
                <?php } ?>
                    <button><a href = "add.php"> Register </a></button>
            </div>
        </div>
</section>
</body>
</html>