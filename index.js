var randomPlayer1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "C:/Users/Usman/Desktop/Dicee Challenge - Complete/images/dice" + randomPlayer1 + ".png";

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);

// Player 2

var randomPlayer2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "C:/Users/Usman/Desktop/Dicee Challenge - Complete/images/dice" + randomPlayer2 + ".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// Player1 wins
if (randomPlayer1 > randomPlayer2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!🏆 ";

  // Player2 wins
}else if (randomPlayer2 > randomPlayer1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🏆";

  // Draw
}else{
  document.querySelector("h1").innerHTML = "Draw!🤝 Play Again";
}
