<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/diplomacy.css" type="text/css">
        <title>Арты</title>
    </head>
    <body>
        <?php 
            session_start();
            if(!isset($_SESSION['logged_user'])){
                header("Location: index.php");
            }
        ?>
        <div class="wrapper">
            <header>
                <h1 class="header_title">Арты</h1>
            </header>
            <main class="main">
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
    </body>
</html>