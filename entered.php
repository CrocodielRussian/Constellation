<?php
    $userame = htmlspecialchars($_POST["username"]);
    if(isset($_POST) && $userame == "winkies"){
        header('Location: map.html#winkies');
        exit;
    }else{
        header('Location: index.html');
        exit;
    }
?>