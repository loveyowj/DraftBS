<?php
include_once("connections/connection.php");
$conn=connection();

if(isset($_GET['deleteid'])){
    $id = $_GET['deleteid'];

    $sql = "DELETE FROM user_list WHERE id = '$id' ";
    $result = mysqli_query($conn, $sql);
    if($result){
        echo "Deleted Successfully";
    }else{
        die(mysqli_error($conn));
    }
}
?>
