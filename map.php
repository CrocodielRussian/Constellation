<?php 
    session_start();
    if(!isset($_SESSION['logged_user'])){
        header("Location: index.php");
    }
?>
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/map.css" type="text/css">
        <?php
            if($_SESSION['logged_user'] == "winkies"){
                echo '<title>Карта мира | Мигуны</title>';
                echo '<link rel="shortcut icon" href="img/frog_sheet_icon.png" type="image/png">';
            }else if($_SESSION['logged_user'] == "munchkins"){
                echo '<title>Карта мира | Жевуны</title>';
                echo '<link rel="shortcut icon" href="img/pig_sheet_icon.png" type="image/png">';
            }else if($_SESSION['logged_user'] == "talkers"){
                echo '<title>Карта мира | Болтуны</title>';
                echo '<link rel="shortcut icon" href="img/sheep_sheet_icon.png" type="image/png">';
            }
         ?>
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
    </head>
    <body>
        <div class="wrapper">
            <header>
                <h2 class="header_title">Карта</h2>
            </header>
            <main class="main">
                <div class="wrapper__content">
                    <div id="map_id" class="map_map"></div>
                </div>
            </main>
            <footer>
                <nav class = "main_menu__items">
                    <a href="map.php" class="main_menu__item"><div id="world" class="main_menu__icon"></div><span>Карта мира</span></a>
                    <?php 
                    if($_SESSION['logged_user'] == "winkies"){
                        echo '<a href="winkies.php" class="main_menu__item"><div id="capital" class="main_menu__icon"></div><span>Столица</span></a>';
                    }else if(($_SESSION['logged_user'] == "munchkins")){
                        echo '<a href="munchkins.php" class="main_menu__item"><div id="capital" class="main_menu__icon"></div><span>Столица</span></a>';
                    }else{
                        echo '<a href="talkers.php" class="main_menu__item"><div id="capital" class="main_menu__icon"></div><span>Столица</span></a>';
                    }
                    ?>
                    <a href="economic.php#all_info" class="main_menu__item"><div id="money" class="main_menu__icon"></div><span>Экономика</span></a>
                    <a href="diplomacy.php" class="main_menu__item"><div id="dip" class="main_menu__icon"></div><span>Дипломатия</span></a>
                    <a href="art.php" class="main_menu__item"><div id="picture" class="main_menu__icon"></div><span>Арты</span></a>
                </nav>
            </footer>
        </div>
        <script src="js/map/main.js" type="module"></script>
    </body>
</html>
