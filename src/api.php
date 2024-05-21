<?php
print_r($_POST);
$name = htmlspecialchars($_POST["name"]);
$phone = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$giveMoney = htmlspecialchars($_POST["giveMoney"]);
$currentCurrency = htmlspecialchars($_POST["currentCurrency"]);
$currentNetwork = htmlspecialchars($_POST["currentNetwork"]);
$card = htmlspecialchars($_POST["card"]);
$country = htmlspecialchars($_POST["country"]);

ini_set('display_errors', 1);
error_reporting(E_ALL);
$from = "info@crypto-currency.cloud";
$to = "info@crypto-currency.cloud";
$subject = "Новая заявка";
$message = "Данные пользователя:
    <ul>
    <li>Имя: $name</li>
    <li>Номер: $phone</li>
    <li>Почта: $email</li>
    <li>Карта: $card</li>
    <li>Сколько хочет обменять: $giveMoney</li>
    <li>Страна: $country</li>
    <li>currentCurrency: $currentCurrency</li>
    <li>currentNetwork: $currentNetwork</li>
    <li>Готов(а) принять звонок для консультации: $user_access</li>
    </ul>";

// <li>Потерял сумму: " . $_POST["user_profile_sum"] . "</li>
telegramBot(
    $name,
    $phone,
    $email,
    $giveMoney,
    $currentCurrency,
    $currentNetwork,
    $card,
    $country
);

$headers = "From: " . $from . "\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$response_email = mail($to, $subject, $message, $headers);
if ($response_email) {
    // Редирект на страницу "ty.php"
    header("Location: ty.php");
    exit(); //Прекратить выполнение скрипта
} else {
    echo "Failed to send the email message.";
}



function telegramBot(
    $name,
    $phone,
    $email,
    $giveMoney,
    $currentCurrency,
    $currentNetwork,
    $card,
    $country
) {
    $current_domain = $_SERVER['HTTP_HOST'];

    $botToken = '6430581913:AAG_Khp1msmeUo8f41Svz1dEmN-NyJIvLPM';
    $chatId = '5550149558';
    $telegramApiUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $messageData = [
        'chat_id' => $chatId,
        'text' => "
    ✅ New Lead\nИмя: <code>$name</code>\nНомер: <code>$phone</code>\nПочта: <code>$email</code>\nОтдает: <code>$giveMoney</code>\nКакая крипта: <code>$currentCurrency</code>\nКакая сеть: <code>$currentNetwork</code>\nКарта: <code>$card</code>\nСтрана: <code>$country</code> 
    ",
        'parse_mode' => 'html',
    ];
    $httpOptions = [
        'http' => [
            'header' => 'Content-Type: application/x-www-form-urlencoded',
            'method' => 'POST',
            'content' => http_build_query($messageData),
        ],
    ];
    $httpContext = stream_context_create($httpOptions);
    $response = file_get_contents($telegramApiUrl, false, $httpContext);
    if ($response === false) {
        $response = file_get_contents($telegramApiUrl, false, 'Ошибка отправки лида');
    }
}
