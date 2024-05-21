<html>

<head>
<link rel="icon" type="image/x-icon" href="tild3966-3061-4734-b264-323338383031__favicon.ico">
    <title> Success </title>
    <style>
        .shadow {
            position: absolute;
            top: 0;
            left: 0;
        }

        .title_block {
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: center;
        }

        .title_block .head-text {
            font-family: sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 64px;
            line-height: 112.5%;
            margin-bottom: 10px;
            /* or 72px */
            text-transform: capitalize;

            color: #1D1E21;
        }

        .title_block .sub-text {
            font-family: sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
            /* or 138% */


            color: #1D1E21;
        }

        .second_block {
            display: flex;
            width: 100%;
            height: 350px;
            justify-content: center;
        }

        .second_block .inform-block {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 70%;
            background-image: url('success-img/background.png');
            background-repeat: round;
            border-radius: 5px;
        }

        .second_block .head-text {
            font-family: sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 40px;
            line-height: 104%;
            /* or 42px */

            text-align: center;

            color: #272D38;
        }

        .second_block .sub-text {

            font-family: sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 28px;
            /* or 138% */

            text-align: center;

            color: #272D38;
        }

        @media (max-width: 1050px) {
            .title_block {
                flex-direction: column;
            }

            .title_block p {
                text-align: center;
            }

            .second_block {
                margin-top: 50px;
            }
        }
    </style>
</head>

<body>
    <img class='shadow' src="images/back.png">
    <div class="title_block">
        <div class='text-block'>
            <p class="head-text">СПАСИБО ЗА <br /> ВАШУ ЗАЯВКУ!</p>
            <p class="sub-text">Наш менеджер свяжется с Вами по указанным <br /> контактным данным в ближайшее время!</p>
        </div>
        <div class='image-block'>
            <a href="/"><img src="images/people.png" /></a>
        </div>
    </div>
</body>

</html>