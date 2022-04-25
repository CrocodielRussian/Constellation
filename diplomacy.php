<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/diplomacy.css" type="text/css">
        <title>Дипломатия</title>
    </head>
    <?php 
        session_start();
        if(!isset($_SESSION['logged_user'])){
            header("Location: index.php");
        }
    ?>
    <body> 
        <div class="wrapper">
            <header>
                <h1 class="header_title">Дипломатия</h1>
            </header>
            <main class="main">
                <li class="attitude__items">
                    <ul id="world_attitude" class="attitude_item">Мир</ul>
                    <ul id="sale_attitude"class="attitude_item">Торговля</ul>
                    <ul id="war_attitude"class="attitude_item">Война</ul>
                </li>
                <div class="content">
                    <canvas id="content_canv" width="705" height="505">
                    </canvas>
                </div>
            </main>
            <footer>
                <nav class = "main_menu__items">
                    <a href="map.php" class="main_menu__item"><div id="world" class="main_menu__icon"></div><span>Карта мира</span></a>
                    <a href="winkies.php" class="main_menu__item"><div id="capital" class="main_menu__icon"></div><span>Столица</span></a>
                    <a href="economic.php#all_info" class="main_menu__item"><div id="money" class="main_menu__icon"></div><span>Экономика</span></a>
                    <a href="diplomacy.php" class="main_menu__item"><div id="dip" class="main_menu__icon"></div><span>Дипломатия</span></a>
                    <a href="art.php" class="main_menu__item"><div id="picture" class="main_menu__icon"></div><span>Арты</span></a>
                </nav>
            </footer>
        </div>
        <script src="js/diplomacy.js"></script>
    </body>
</html>