<!DOCTYPE html>
<html lang="ru">
    <?php 
        session_start();
        if(!isset($_SESSION['logged_user']) || $_SESSION['logged_user'] != "munchkins")){
            header("Location: index.php");
        }
    ?>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/munchkins.css" type="text/css">
        <link rel="shortcut icon" href="img/pig_sheet_icon.png" type="image/png">
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
        <title>Город | Жевуны</title>
    </head>
    <body>
        <div class="wrapper">
            <header>
                <div class="header__panel">
                    <div class="panel__population">
                        <div class="population_icon"></div>
                        <div class="text_value">100</div>
                    </div>
                    <div class="city_title">Столица</div>
                    <div class="panel__money">
                        <div class="panel__money__sub">
                            <div class="resurs__panel">
                                <div class="currency_icon"></div>
                                <div class="text_value">100</div>
                            </div>
                            <button class="panel__money_butt">+</button>
                        </div>
                        <div class="panel__money__sub">
                            <div class="resurs__panel">
                                <div class="crystal_icon"></div>
                                <div class="text_value">10</div>
                            </div>
                            <button class="panel__money_butt">+</button>
                        </div>
                    </div>
                </div>
            </header>
            <main class="main">
                <div class="wrraper__content">
                    <div id="city_id" class="city"></div>
                </div>
            </main>
            <footer>
                <nav class = "main_menu__items">
                    <a href="map.php" class="main_menu__item"><div id="world" class="main_menu__icon"></div><span>Карта мира</span></a>
                    <a href="munchkins.php" class="main_menu__item"><div id="capital" class="main_menu__icon"></div><span>Столица</span></a>
                    <a href="economic.php#all_info" class="main_menu__item"><div id="money" class="main_menu__icon"></div><span>Экономика</span></a>
                    <a href="diplomacy.php" class="main_menu__item"><div id="dip" class="main_menu__icon"></div><span>Дипломатия</span></a>
                    <a href="art.php" class="main_menu__item"><div id="picture" class="main_menu__icon"></div><span>Арты</span></a>
                </nav>
            </footer>
        </div>
        <script src="js/city_munchkins/main.js" type="module"></script>
    </body>
</html>