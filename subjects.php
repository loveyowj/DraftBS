<?php

if (!isset($_SESSION)){
    session_start();
}

include_once("connections/connection.php");
$conn=connection();

$user = $_SESSION['UserLogin'];
$query = mysqli_query($conn, "SELECT * FROM user_list WHERE userName = '$user'");
$row = mysqli_fetch_array($query);
$id = $row['id'];

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">
    <link rel = "stylesheet" href = "css/subjects.css">
</head>
<body>
    <!-- header starts -->
    <header class = "header">
        <section class = "flex">
            <a href = "index.php" class = "logo">Brightside</a>
            <form action = "" method = "post" class = "search-form">
                <input type="text" name="search_box" placeholder="Search Notes..." required maxlength="100" onkeyup = "search()">
                <button type = "submit" class = "fas fa-search" name = "search_box"></button>
            </form>
            <div class = "icons">
                <div id = "menu-btn" class = "fas fa-bars"></div>
                <div id = "search-btn" class = "fas fa-search"></div>
                <div id = "user-btn" class = "fas fa-user"></div>
            </div>
            <div class = "profile">
            <img src = "img/student.png" alt="">
            <h2><?php echo $row['userName'];?></h2>
            <span>role</span>
            <a href = "profile.html" class = "btn"> View Profile</a>
            <!--<a href = "update.php" class = "option-btn">Update</a>-->
            <a href = "logout.php" class = "option-btn">Log Out</a>
        </div>
        </section>
    </header>
    <!-- header ends-->

    <!--sidebar starts-->
    <div class = "side-bar">
        <div class = "profile">
            <img src = "img/student.png" alt="">
            <h2><?php echo $row['userName'];?></h2>
            <span>role</span>
            <a href = "profile.html" class = "btn"> View Profile</a>
        </div>
        <nav class = "navbar">
            <ul>
                <li><a href = "home.php"><i class = "fas fa-home"></i><span>home</span></a></li>
                <li><a href = "subjects.php"><i class = "fas fa-graduation-cap"></i><span>notes</span></a></li>
                <li ><a href = "tools.php"><i class = "fas fa-tools"></i><span>tools</span></a></li>
            </ul>
        </nav>
    </div>
    <!--sidebar ends-->

    <!-- calendar starts -->
    <ul class = "week">
        <li>Mon</li>
        <li>Tue</li>
        <li>Wed</li>
        <li>Thu</li>
        <li>Fri</li>
        <li>Sat</li>
        <li>Sun</li>
    </ul>
    <!-- calendar ends -->



    <!--notes starts -->
    <div class = "popup-box">
        <div class = "popup">
            <div class = "content">
                <header>
                    <p>Add a new note</p>
                    <i class = "fas fa-times"></i>
                </header>
                <form action = "#">
                    <div class = "row-title">
                        <label>Title</label>
                        <input type = "text">
                    </div>
                    <div class = "row-description">
                        <label>Description</label>
                        <textarea></textarea>
                    </div>
                    <button> Add Note </button>
                </form>
            </div>
        </div>
    </div>

    <div class = "wrapper">
        <li class = "add-box">
            <div class = "icon"><i class = "fas fa-plus"></i></div>
            <p>Add new note</p>
        </li>
    </div>
    <!--notes ends-->

    <script src = "js/subject.js"></script>

</body>
</html>