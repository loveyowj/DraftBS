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
    <link rel = "stylesheet" href = "css/tools_style.css">
</head>
<body>
    <!-- header starts -->
    <header class = "header">
        <section class = "flex">
            <a href = "index.php" class = "logo">Brightside</a>
            <form action = "" method = "post" class = "search-form">
                <input type="text" name="search_box" placeholder="Search Notes..." required maxlength="100">
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

    <!--body-->

    <section class = "tool-body">
    <br><br><br><br>
        <!--calculator starts-->
        <div class = "box-container">
            <div class ="box">
                <h3 class = "title"> calculator </h3>
                <div class="calculator">
                    <form>
                        <div class = "display">
                         <input type="text" name = "display">
                        </div>
                        <div>
                            <input type="button" value="AC" id = "btn" onclick="display.value = '' ">
                            <input type="button" value="DE" id = "btn" onclick="display.value = display.value.toString().slice(0,-1)">
                            <input type="button" value="/" id = "btn" onclick="display.value += '/' ">
                            <input type="button" value="*" id = "btn" onclick="display.value += '*' ">
                        </div>
                        <div>
                            <input type="button" value="7" id = "btn" onclick="display.value += '7' ">
                            <input type="button" value="8" id = "btn" onclick="display.value += '8' ">
                            <input type="button" value="9" id = "btn" onclick="display.value += '9' ">
                            <input type="button" value="-" id = "btn" onclick="display.value += '-' ">
                        </div>
                        <div>
                            <input type="button" value="4" id = "btn" onclick="display.value += '4' ">
                            <input type="button" value="5" id = "btn" onclick="display.value += '5' ">
                            <input type="button" value="6" id = "btn" onclick="display.value += '6' ">
                            <input type="button" value="+" id = "btn" onclick="display.value += '+' ">
                        </div>
                        <div>
                            <input type="button" value="1" id = "btn" onclick="display.value += '1' ">
                            <input type="button" value="2" id = "btn" onclick="display.value += '2' ">
                            <input type="button" value="3" id = "btn" onclick="display.value += '3' ">
                            <input type="button" value="%" id = "btn" onclick="display.value = display.value/100 ">
                        </div>
                        <div>
                            <input type="button" value="()" id = "btn" onclick="display.value += '()' ">
                            <input type="button" value="0" id = "btn" onclick="display.value += '0' ">
                            <input type="button" value="." id = "btn" onclick="display.value += '.' ">
                            <input type="button" value="=" onclick="display.value = eval(display.value)" class = "equal">
                        </div>
                    </form>
                </div>
            </div>
            <!--calculator ends-->

            <!--conversion starts-->
            <div class ="box">
                <h3 class = "title"> conversion </h3>
                <div class="conversion">
                    <h1>Volume</h1>
                    <div class = "menu">
                    <button id = "menu-button"><a href = "tools.php">Length</a></button>
                        <button id = "menu-button"><a href = "temperature.php">Temperature</a></button>
                        <button id = "menu-button"><a href = "area.php">Area</a></button>
                        <button id = "menu-button"><a href = "volume.php">Volume</a></button>
                        <button id = "menu-button"><a href = "weight.php">Weight</a></button>
                        <button id = "menu-button"><a href = "time.php">Time</a></button>
                    </div>
                    <div class="from">
                        <select id = "select_from" >            
                            <option value = "cm">Cubic Meter</option>
                            <option value = "ck"> Cubic Kilometer </option>
                            <option value = "ccm"> Cubic Centimeter</option>
                            <option value = "cmm"> Cubic Millimeter</option>
                            <option value = "l"> Liter</option>
                            <option value = "ml"> Milliliter</option>
                            <option value = "ug"> US Gallon</option>
                            <option value = "uq"> US Quart</option>
                            <option value = "up"> US Pint</option>
                            <option value = "uc"> US Cup</option>
                            <option value = "ufo"> US Fluid Ounce</option>
                            <option value = "utbs"> US Tablespoon</option>
                            <option value = "utsp"> US Teaspon</option>
                            <option value = "ig"> Imperial Gallon</option>
                            <option value = "iq"> Imperial Quart</option>
                            <option value = "ip"> Imperial Pint</option>
                            <option value = "ifo"> Imperial Fluid Ounce</option>
                            <option value = "itbs"> Imperial Tablespoon</option>
                            <option value = "itsp"> Imperial Teaspoon</option>
                            <option value = "cmi"> Cubic Mile</option>
                            <option value = "cyd"> Cubic Yard</option>
                            <option value = "cft"> Cubic Foot</option>
                            <option value = "cin"> Cubic Inch</option>
                        </select>
                        <input type = "number" id = "mfrom" placeholder = "Enter Number">
                    </div>
                    <div class="to">
                        <select id = "select_to">            
                            <option value = "cm">Cubic Meter</option>
                            <option value = "ck"> Cubic Kilometer </option>
                            <option value = "ccm"> Cubic Centimeter</option>
                            <option value = "cmm"> Cubic Millimeter</option>
                            <option value = "l"> Liter</option>
                            <option value = "ml"> Milliliter</option>
                            <option value = "ug"> US Gallon</option>
                            <option value = "uq"> US Quart</option>
                            <option value = "up"> US Pint</option>
                            <option value = "uc"> US Cup</option>
                            <option value = "ufo"> US Fluid Ounce</option>
                            <option value = "utbs"> US Tablespoon</option>
                            <option value = "utsp"> US Teaspon</option>
                            <option value = "ig"> Imperial Gallon</option>
                            <option value = "iq"> Imperial Quart</option>
                            <option value = "ip"> Imperial Pint</option>
                            <option value = "ifo"> Imperial Fluid Ounce</option>
                            <option value = "itbs"> Imperial Tablespoon</option>
                            <option value = "itsp"> Imperial Teaspoon</option>
                            <option value = "cmi"> Cubic Mile</option>
                            <option value = "cyd"> Cubic Yard</option>
                            <option value = "cft"> Cubic Foot</option>
                            <option value = "cin"> Cubic Inch</option>
                        </select>
		                <input type = "number" id = "mto" placeholder = "0">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--footer starts-->
  
    <!--footer ends-->
    <script src = "js/volume.js"></script>
</body>
</html>