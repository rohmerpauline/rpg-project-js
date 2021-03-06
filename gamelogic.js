/* ************************** GENERATE THE GAME ************************** */
let hitButtonPlayer1 = document.getElementById("hit-player1");
let hitButtonPlayer2 = document.getElementById("hit-player2");
let healButtonPlayer1 = document.getElementById("heal-player1");
let healButtonPlayer2 = document.getElementById("heal-player2");
let yieldButtonPlayer1 = document.getElementById("yield-player1");
let yieldButtonPlayer2 = document.getElementById("yield-player2");

let gameLog = document.getElementById("gamelog-text");

let healthPlayer1 = document.getElementById("health-player1");
let healthPlayer2 = document.getElementById("health-player2");

let player1Btn = document.getElementById("button-player1");
let player2Btn = document.getElementById("button-player2");

// HIT BUTTON PLAYER 1

hitButtonPlayer1.addEventListener("click", () => {
    Player1.itemOfPlayer(Player1, Player2);
    Player1.raceOfPlayer(Player1, Player2);
    Player2.damage();
    Player1.endgame(Player2);
    Player1.clicked(hitButtonPlayer1, healButtonPlayer1, yieldButtonPlayer1, player1Btn, hitButtonPlayer2, healButtonPlayer2, yieldButtonPlayer2, player2Btn);
    healthPlayer2.style.width = Player2.currenthealth + "%";
    healthPlayer1.style.width = Player1.currenthealth + "%";
    console.log(healthPlayer1.style.width);
    console.log(healthPlayer2.style.width);
    gameLog.innerHTML += `${Player1.name} hit for ${playerAttack}. HP ${Player1.currenthealth} / ${Player1.maxHealth}</br>`
}); 

// HIT BUTTON PLAYER 2

hitButtonPlayer2.addEventListener("click", () => {
    Player2.itemOfPlayer(Player2, Player1);
    Player2.raceOfPlayer(Player2, Player1);
    Player1.damage();
    Player2.endgame(Player1);
    Player2.clicked(hitButtonPlayer2, healButtonPlayer2, yieldButtonPlayer2, player2Btn, hitButtonPlayer1, healButtonPlayer1, yieldButtonPlayer1, player1Btn);
    healthPlayer1.style.width = Player1.currenthealth + "%";
    healthPlayer2.style.width = Player2.currenthealth + "%";
    console.log(healthPlayer1.style.width);
    console.log(healthPlayer2.style.width);
    gameLog.innerHTML += `${Player2.name} hit for ${playerAttack}. HP ${Player2.currenthealth} / ${Player2.maxHealth} </br>`
}); 

// HEAL BUTTON PLAYER 1

healButtonPlayer1.addEventListener("click", () => {
    Player1.itemOfPlayer(Player1, Player2);
    Player1.raceOfPlayer(Player1, Player2);
    Player1.heal();
    Player1.clicked(hitButtonPlayer1, healButtonPlayer1, yieldButtonPlayer1, player1Btn, hitButtonPlayer2, healButtonPlayer2, yieldButtonPlayer2, player2Btn);
    healthPlayer1.style.width = Player1.currenthealth + "%";
    console.log(healthPlayer1.style.width);
    console.log(healthPlayer2.style.width);
}); 

// HEAL BUTTON PLAYER 2

healButtonPlayer2.addEventListener("click", () => {
    Player2.itemOfPlayer(Player2, Player1);
    Player2.raceOfPlayer(Player2, Player1);
    Player2.heal();
    Player2.clicked(hitButtonPlayer2, healButtonPlayer2, yieldButtonPlayer2, player2Btn, hitButtonPlayer1, healButtonPlayer1, yieldButtonPlayer1, player1Btn);
    healthPlayer2.style.width = Player2.currenthealth + "%";
    console.log(healthPlayer1.style.width);
    console.log(healthPlayer2.style.width);
}); 

// YIELD BUTTON PLAYER 1

yieldButtonPlayer1.addEventListener("click", () => {
    Player1.yield(Player2);
}); 

// YIELD BUTTON PLAYER 2

yieldButtonPlayer2.addEventListener("click", () => {
    Player2.yield(Player1);
}); 