var randomnumber =Math.floor( Math.random() *6)+1;
console.log(randomnumber);

var radnomDiceImage = "dice" + randomnumber + ".png";

var randomImageSource = "images/" +radnomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// second image
var randomnumber2 = Math.floor(Math.random() * 6)+1;

var randomDiceImage2 = "dice"+ randomnumber2 +".png";

var randomImageSource2 = "images/"+randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if (randomnumber > randomnumber2){
    document.getElementById("winner").innerHTML="Player 1 Wins";

}
else if(randomnumber2 > randomnumber)
{
    document.getElementById("winner").innerHTML="Player 2 Wins";

}

else {
    document.getElementById("winner").innerHTML="It's a Tie";
}