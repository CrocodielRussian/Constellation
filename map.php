<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css" type="text/css">
    <title>Вход</title>
</head>
<body>
    <div class="wrapper">
        <main class="main">
            <div class="content">
                <div class="country_img"></div>
                <div class="entered">
                    <form action="entered.php" method="post">
                        <div class="wrapp__form">
                            <div class="entered_text">Вход</div>
                            <div class="wrapp__input">
                                <div class="wrapp__w__input">
                                    <input tabindex="1" id="user" type="text" name="username" class="input_form" autocomplete="off" placeholder=" ">
                                    <label id="lbl_user" for="username" class="lbl_form">Пользователь</label>
                                </div>
                                <div class="wrapp__w__input">  
                                    <input tabindex="2" id="pass" type="password" name="userpass" class="input_form" autocomplete="off" placeholder=" ">
                                    <label id="lbl_pass" for="pass" class="lbl_form">Пароль</label>
                                </div>
                            </div>
                            <button tabindex="3" type="submit" value="Вход" class="submit_form"><p class="sub_text">Вход</p></button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</body>
</html>