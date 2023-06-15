var randomNumber1 = Math.floor(Math.random()*6) + 1;
var img1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".player .image1").setAttribute("src", img1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var img2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".player .image2").setAttribute("src", img2);

var heading = document.querySelector("h1");


if(randomNumber1 > randomNumber2){
    heading.innerHTML= "🎉 Player 1 Wins";
} else if (randomNumber1 < randomNumber2){
    heading.innerHTML= " Player 2 Wins 🎉";
} else {
    heading.innerHTML= "🎉 Draw 🎉" ;
} 
