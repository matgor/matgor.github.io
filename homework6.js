// ZADANIE 1

function smsReader () {
    var sender = 'mikey';
    var sms = '   Hello Jane, i am really tired today, i will call you tommorrow.         ';
    var receiver = 'JANE';
return '(FROM:' + sender + ') (TO: ' + receiver+ ') (MESSAGE: ' + sms +'.)';
}

console.log(smsReader());

// ZADANIE 2

function initials() {
    var firstName = 'john';
    var lastName = 'doe';
return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase() + '.'
}

console.log(initials());

// ZADANIE 3

function randomNumber() {
var randomNmb = Math.random();

    return 'Twoja szczęśliwa liczba to: ' + randomNmb.toFixed(2) + ' lub ' + randomNmb.toFixed(2) * 100

}

console.log(randomNumber());

// ZADANIE 4

function getDinnerPrice() {
    var tip = 20;
    var price = 100;

    return tip + price

}

console.log(getDinnerPrice());