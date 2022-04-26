<!DOCTYPE html>
<html lang="ru">
    <?php 
        session_start();
        if(!isset($_SESSION['logged_user'])){
            header("Location: index.php");
        }
    ?>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <?php
            if($_SESSION['logged_user'] == "winkies"){
                echo '<title>Экономика | Мигуны</title>';
                echo '<link rel="shortcut icon" href="img/frog_sheet_icon.png" type="image/png">';
            }else if($_SESSION['logged_user'] == "munchkins"){
                echo '<title>Экономика | Жевуны</title>';
                echo '<link rel="shortcut icon" href="img/pig_sheet_icon.png" type="image/png">';
            }else if($_SESSION['logged_user'] == "talkers"){
                echo '<title>Экономика | Болтуны</title>';
                echo '<link rel="shortcut icon" href="img/sheep_sheet_icon.png" type="image/png">';
            }
         ?>
        <link rel="stylesheet" href="css/economic.css" type ="text/css">
    </head>
    <body>
        <div class="wrapper">
            <header>
                <h2 class="header_title">Экономика</h2>
            </header>
            <main class="main">
                <div class="tabs">
                    <div class="tabs__menu">
                        <nav class="tabs__items">
                            <a href="#all_info" class="tabs_item"><span>Общая информация</span></a>
                            <a href="#build" class="tabs_item"><span>Здания</span></a>
                            <a href="#trade" class="tabs_item"><span>Торговля</span></a>
                        </nav>
                    </div>
                    <div class="tabs__body">
                        <div id="all_info" class="tabs__block">
                            <div class="wrapper__canvas">
                                <div class="wrapper_canvas__content">
                                    <canvas class="canvas_size" id="pie_income" width="400" height="400"></canvas>
                                </div>
                                <div class="wrapper_canvas__content">
                                    <canvas class="canvas_size" id="pie_expenses" width="400" height="400"></canvas>
                                </div>
                                <div id="line_sold_w" class="wrapper_canvas__content">
                                    <canvas class="canvas" id="line_soldo" width="600" height="400"></canvas>
                                    <div class="wrapper_date">
                                        <input onchange="durationDate()" type="date" id="startdate">
                                        <input onchange="durationDate()" type="date" id="enddate">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="build" class="tabs__block">
                            
                            <div class="buildings">
                                <div class="wrapper__buildings">
                                    <div class="building__info" value="food">
                                        <span class="building_title">А.П Мигунов</span>
                                        <div class="building_img"><img src="img/build/ap_migunov.png"></div>
                                        <ul class="building__text">
                                            <li>Производит: <span class="building_maintext">Батончики</span></li>
                                            <li>% от прибыли: <span class="building_maintext">20%</span></li>
                                            <li>Доход: <span id="stonks" class="building_maintext">10$</span></li>
                                            <li>Всего зданий: <span class="building_maintext">2/2</span></li>
                                            <li>Улучшение: <span id="cost_upgrade" class="building_maintext">1000$</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="trade" class="tabs__block">
                            <div id="all" class="trade__transfers">
                            </div>
                        </div>
                    </div>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
        <script src="js/economic.js"></script>
    </body>
</html>