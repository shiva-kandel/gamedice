var images =[" images/dice1.png"," images/dice2.png","images/dice3.png","images/dice4.png"," images/dice5.png","images/dice6.png"];
var i=images.length;
var randomNumber1=Math.floor(Math.random()*i);
var randomNumber2=Math.floor(Math.random()*i);
document.getElementById("image1").src = images[randomNumber1];
document.getElementById("image2").src = images[randomNumber2];

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="player 1 wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="player 2 wins";
}
else
{
document.querySelector("h1").textContent="Draw";  
}
