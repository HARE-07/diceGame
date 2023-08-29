
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "img/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


let randomNumber2= Math.floor(Math.random()* 6) + 1;
let randomDiceImage1="dice" + randomNumber2 + ".png";
let randomImageSource1="img/" + randomDiceImage1;
 
let image2= document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource1);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="player 1 win";

}
 else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins!";
 }
else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="it's draw";
}