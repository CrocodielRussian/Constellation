<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/munchkins.css" type="text/css">

        <title>Жевуны</title>
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
    </body>
</html>