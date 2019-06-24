/*
function swapDiceImg(player) {
	var playerContainer = "";
	var allDices = [];
	var randNum = Math.floor(Math.random()* 6) + 1;
	var curElementClass = "";
	var curElementId = "";
	if(player == "player1" || player == "player2") {
		playerContainer = document.getElementById(player);
		allDices = playerContainer.getElementsByTagName("IMG");
		// console.log("**** random num ", randNum);
		for(var idx=0, len=allDices.length; idx < len; idx++) {
			curElementClass = allDices[idx].getAttribute("class");
			curElementId = allDices[idx].getAttribute("id");
			if(curElementId && curElementId == player+ "_" + randNum ) {
				allDices[idx].setAttribute("class", curElementClass.replace(" hidden", ""));
				continue;
			}
			if(curElementId != player+ "_" + randNum && curElementClass.indexOf(" hidden") < 0) {
				allDices[idx].setAttribute("class", curElementClass +" hidden");
			}
		}
	} else {
		alert("Yo Mother Ducker, cheater");
	}
}
//
swapDiceImg("player1");
//
swapDiceImg("player2");
*/

// function swapDiceImgSingle(player) {
// 	var playerContainer = "";
// 	var diceMainImg = "";
// 	var randNum = Math.floor(Math.random()* 6) + 1;
// 	var curElementSrc = "";
// 	if(player == "player1" || player == "player2") {
// 		playerContainer = document.getElementById(player);
// 		diceMainImg = playerContainer.getElementsByTagName("IMG")[0];
// 		curElementSrc = diceMainImg.getAttribute("src");
// 		diceMainImg.setAttribute("src", "images/dice"+randNum+".png");
// 		// diceMainImg.setAttribute("src", curElementSrc.replace(/(\/dice)[0-9]+/gi, "$1" + randNum));
// 	}
// }
//
// //
// swapDiceImgSingle("player1");
// //
// swapDiceImgSingle("player2");


// function diceRoll(player){
//   var playerContainer = "";
//   var diceMainImg = "";
//   var randNum = Math.floor(Math.random()* 6)+ 1;
//   var curElementSrc = "";
//   if(player == "player1" || player == "player2"){
//    playerContainer  = document.getElementById(player);
//    diceMainImg = playerContainer.getElementsByTagName("IMG")[0];
//    curElementSrc = diceMainImg.getAttribute("src");
//    diceMainImg.setAttribute("src", "images/dice"+ randNum + ".png");
//
// }
// }
// // Winner calculation
// if(randNum > randNum2 ){
//   document.querySelector("h1").innerHtml = "🏳️Player 1 Wins!";
// }
// else if(randNum 2 > randNum 1){
//   document.querySelector("h1").innerHtml = "Player 2 Wins!🏳️";
// }
// else {
//   document.querySelector("h1").innerHtml = "Draw";
// }
//
// diceRoll("player1");
// diceRoll("player2");



// if(player == "player1" || player == "player2"){
//     var hContainer = "";
//     var draw = "";
//     var player1Wins ="";
//     var player2wins = "";
//
//     hContainer = getElementsByTagName("h1")[0];
//     draw = hContainer.querySelector("h1").innerHtml = "Draw!";
//     player1Wins = hContainer.querySelector("h1").innerHtml = "Player1 wins";
//     player2wins = hContainer.querySelector("h1").innerHtml = "Player2 wins";
// }
//
//
//
// diceRoll("player1");
// diceRoll("player2");

var randNum1 = Math.floor(Math.random()* 6) + 1;
var randDiceImg = "dice" + randNum1 + ".png";
var randSource = "images/" + randDiceImg;
var randDice = document.querySelectorAll("IMG")[0];
randDice.setAttribute("src",randSource);

var randNum2 = Math.floor(Math.random()* 6) + 1;
var randSource2 = "images/dice" + randNum2 + ".png";
var randDice2 = document.querySelectorAll("IMG")[1];
randDice2.setAttribute("src", randSource2);

if(randNum1 > randNum2){
  document.querySelector("h1").innerHTML = "🏳️Player 1 Wins!";
}else if(randNum2 >randNum1 ){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🏳️";
}else{
  document.querySelector("h1").innerHTML = "Its a Draw!";
}



// if(randNum1 > randNum2){
//   document.querySelector("h1").innerHtml = "🏳️Player 1 Wins!";
// }
// else if(randNum2 > randNum1){
//   document.querySelector("h1").innerHtml = "Player 2 Wins!🏳️";
// }
// else
// {document.querySelector("h1").innerHtml = "Draw";}
