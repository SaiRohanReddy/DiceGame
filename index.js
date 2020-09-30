var player1 = prompt("Player 1 Name: ");
var player2 = prompt("Player 2 Name: ");
function playFunction(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1;
document.querySelector(".img1").setAttribute("src","images/" + randomImage + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber2;
document.querySelector(".img2").setAttribute("src","images/" + randomImage1 + ".png");

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = Player1 + " Wins 🚩";
}

if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = Player2 + " Wins 🚩";
}

if (randomNumber1 === randomNumber2) {

    document.querySelector("h1").innerHTML = "Draw";
}
}
