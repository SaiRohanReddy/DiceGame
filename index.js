function playFunction(){

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1;
document.querySelector(".img1").setAttribute("src","images/" + randomImage + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "dice" + randomNumber2;
document.querySelector(".img2").setAttribute("src","images/" + randomImage1 + ".png");

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}

if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";
}

if (randomNumber1 === randomNumber2) {

    document.querySelector("h1").innerHTML = "Draw";
}
}
