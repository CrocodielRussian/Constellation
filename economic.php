<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/economic.css" type ="text/css">
        <title>Экономика</title>
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
                <h1 class="header_title">Экономика</h1>
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
                                    <canvas class="canvas" id="pie_income" width="400" height="400"></canvas>
                                </div>
                                <div class="wrapper_canvas__content">
                                    <canvas class="canvas" id="pie_expenses" width="400" height="400"></canvas>
                                </div>
                                <div id="line_sold_w" class="wrapper_canvas__content">
                                    <canvas class="canvas" id="line_soldo" width="600" height="400"></canvas>
                                    <input onchange="durationDate()" type="date" value="2022-11-06" id="startdate">
                                    <input onchange="durationDate()" type="date" value="2022-11-12" id="enddate">
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