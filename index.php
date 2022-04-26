<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/index.css" type="text/css">
        <link rel="shortcut icon" href="img/icon.png" type="image/png">
        <title>Вход | Созвездие</title>
    </head>
    <body>
        <div class="wrapper">
            <main class="main">
                <div class="content">
                    <div class="country_img"></div>
                    <div class="entered">
                        <h1 class="header_title">Экономическая игра "Созвездие"</h1>
                        <form action="" method="post">
                            <?php
                                require 'rb-sqlite.php';
                                R::setup('sqlite:tmp/users.db');
                                R::freeze();
                                $data = $_POST; 
                                if(isset($data['entered'])){
                                    $errors = array();
                                    $user = R::findOne('users', 'name = ?', array(trim(htmlspecialchars($data["username"]))));
                                    if($user && $data['userpass'] == trim(htmlspecialchars($user["pass"]))){
                                        session_start();
                                        $_SESSION['logged_user'] = $user["name"];
                                        header("Location: map.php");
                                    }else{
                                        $errors[] = 'Неверный логин или пароль';
                                    }
                                }
                                R::close();
                            ?>
                            <div class="wrapp__form">
                                <div class="entered_text">Вход</div>
                                <div class="wrapp__input">
                                    <div id="error" class="error_text">&#10033;Неверный логин или пароль</div>
                                    <div class="wrapp__w__input">
                                        <input tabindex="1" id="user" type="text" name="username" class="input_form normal_input" value="<?php echo $data['username']; ?>" placeholder=" ">
                                        <label id="lbl_user" for="username" class="lbl_form">Пользователь</label>
                                    </div>
                                    <div class="wrapp__w__input">  
                                        <input tabindex="2" id="pass" type="password" name="userpass" value="" class="input_form normal_input" autocomplete="off" placeholder=" ">
                                        <label id="lbl_pass" for="pass" class="lbl_form">Пароль</label>
                                    </div>
                                </div>
                                <button tabindex="3" name="entered" type="submit" value="Вход" class="submit_form"><p class="sub_text">Вход</p></button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
        <?php 
        if(count($errors) != 0){
            echo '<script> 
            const input_user = document.getElementById("user")
            const input_password = document.getElementById("pass")
            const error_text = document.getElementById("error")

            

            let active = 0

            error_text.style.display = "block"

            input_user.addEventListener("click", entered)
            input_password.addEventListener("click", entered)

            input_user.classList.remove("normal_input")
            input_user.classList.add("error_input")
            input_password.classList.remove("normal_input")
            input_password.classList.add("error_input")
            

            function entered(){
                input_user.classList.add("normal_input")
                input_user.classList.remove("error_input")
                input_password.classList.add("normal_input")
                input_password.classList.remove("error_input")
                error_text.style.display = "none"
            }
         </script>';
        }
        ?>
    </body>
</html>