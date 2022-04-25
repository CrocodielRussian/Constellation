<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="css/capital.css" type="text/css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/phaser@3.55.2/dist/phaser.min.js"></script>
        <title>Столица</title>
        <style>
            .title_building{
                /* color: #D4A11D; */
                font-size: 14px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .info{
                background: #F1DEBA;
                border-radius: 8px;
                width: 240px;
                height: 100px;
                font-family: Arial;
                padding: 5px 10px;
            }
            .wrrap_info{
                width: 100%;
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
            }
            ul{
                font-size: 12px;
                width: 80%;
                padding: 2px;
                margin:0;
            }
            .value{
                color: #376B0D;
            }
            .hp{
                background-color: #FFD07A;
                width: 100px;
                height: 12px;
                border-radius: 10px;
                position: relative;
            }
            .img_building{
                width: 40%;
                height: 75px;
                margin: 0;
                background-image: var(--image);
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
            .hp:after{
                content: "";
                width: calc(var(--width,0) * 1%);
                max-width: calc(100% - 4px);
                height: 8px;
                top: 2px;
                left: 2px;
                background-color: #F04438;
                position: absolute;
                border-radius: 10px;
            }
            .level{
                color: #D4A11D;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10px;
                width: 100%; 
                height: 18px;
            }
        </style>
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
                <h1 class="header_title">Столица</h1>
            </header>
            <main class="main">
                <div id="city" class="city"></div>
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
        <script src="js/city/main.js" type="module"></script>
    </body>
</html>