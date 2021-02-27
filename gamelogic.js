/* ************************** GENERATE THE GAME ************************** */
let hitButtonPlayer1 = document.getElementById("hit-player1");
let hitButtonPlayer2 = document.getElementById("hit-player2");
let healButtonPlayer1 = document.getElementById("heal-player1");
let healButtonPlayer2 = document.getElementById("heal-player2");
let yieldButtonPlayer1 = document.getElementById("yield-player1");
let yieldButtonPlayer2 = document.getElementById("yield-player2");


// HIT BUTTON PLAYER 1

hitButtonPlayer1.addEventListener("click", () => {
    Player1.itemOfPlayer(Player1, Player2);
    Player1.raceOfPlayer(Player1, Player2);
    Player2.damage();
    Player1.clicked(Player1, Player2);
    document.getElementById("health-player2").style.width = Player2.currenthealth + "%";
    document.getElementById("health-player1").style.width = Player1.currenthealth + "%";
    console.log(document.getElementById("health-player1").style.width);
    console.log(document.getElementById("health-player2").style.width);
    document.getElementById("hit-player2").disabled = false;
    
}); 

// HIT BUTTON PLAYER 2

hitButtonPlayer2.addEventListener("click", () => {
    Player2.itemOfPlayer(Player2, Player1);
    Player2.raceOfPlayer(Player2, Player1);
    Player1.damage();
    Player2.clicked(Player2, Player1);
    document.getElementById("health-player1").style.width = Player1.currenthealth + "%";
    document.getElementById("health-player2").style.width = Player2.currenthealth + "%";
    console.log(document.getElementById("health-player1").style.width);
    console.log(document.getElementById("health-player2").style.width);
}); 

// HEAL BUTTON PLAYER 1

healButtonPlayer1.addEventListener("click", () => {
    Player1.itemOfPlayer(Player1, Player2);
    Player1.raceOfPlayer(Player1, Player2);
    Player1.heal();
    Player1.clicked(Player1, Player2);
    document.getElementById("health-player1").style.width = Player1.currenthealth + "%";
    console.log(document.getElementById("health-player1").style.width);
    console.log(document.getElementById("health-player2").style.width);
}); 

// HEAL BUTTON PLAYER 2

healButtonPlayer2.addEventListener("click", () => {
    Player2.itemOfPlayer(Player2, Player1);
    Player2.raceOfPlayer(Player2, Player1);
    Player2.heal();
    Player2.clicked(Player2, Player1);
    document.getElementById("health-player2").style.width = Player2.currenthealth + "%";
    console.log(document.getElementById("health-player1").style.width);
    console.log(document.getElementById("health-player2").style.width);
}); 


// DISABLE BUTTON WHEN PLAYED

/* function btnPlayer1() {
    if (Player1.click == true) {
        hitButtonPlayer1.disabled = true;
        healButtonPlayer1.disabled = true;
        yieldButtonPlayer1.disabled = true;
        hitButtonPlayer1.style.opacity = "50%";
        healButtonPlayer1.style.opacity = "50%";
        yieldButtonPlayer1.style.opacity = "50%";
    } else if (Player2.click == false) {
        hitButtonPlayer2.disabled = false;
        healButtonPlayer2.disabled = false;
        yieldButtonPlayer2.disabled = false;
        hitButtonPlayer2.style.opacity = "100%";
        healButtonPlayer2.style.opacity = "100%";
        yieldButtonPlayer2.style.opacity = "100%";
    }
}
    
function btnPlayer2() {
    if (Player2.click == true) {
        hitButtonPlayer2.disabled = true;
        healButtonPlayer2.disabled = true;
        yieldButtonPlayer2.disabled = true;
        hitButtonPlayer2.style.opacity = "50%";
        healButtonPlayer2.style.opacity = "50%";
        yieldButtonPlayer2.style.opacity = "50%";
    } else if (Player1.click == false) {
        hitButtonPlayer1.disabled = false;
        healButtonPlayer1.disabled = false;
        yieldButtonPlayer1.disabled = false;
        hitButtonPlayer1.style.opacity = "100%";
        healButtonPlayer1.style.opacity = "100%";
        yieldButtonPlayer1.style.opacity = "100%";
    }
} */
/* if (Player1.click == true) {
    hitButtonPlayer1.disabled = true;
    healButtonPlayer1.disabled = true;
    yieldButtonPlayer1.disabled = true;
    hitButtonPlayer1.style.opacity = "50%";
    healButtonPlayer1.style.opacity = "50%";
    yieldButtonPlayer1.style.opacity = "50%";
} else if (Player2.click == false) {
    hitButtonPlayer2.disabled = false;
    healButtonPlayer2.disabled = false;
    yieldButtonPlayer2.disabled = false;
    hitButtonPlayer2.style.opacity = "100%";
    healButtonPlayer2.style.opacity = "100%";
    yieldButtonPlayer2.style.opacity = "100%";
} else if (Player2.click == true) {
    hitButtonPlayer2.disabled = true;
    healButtonPlayer2.disabled = true;
    yieldButtonPlayer2.disabled = true;
    hitButtonPlayer2.style.opacity = "50%";
    healButtonPlayer2.style.opacity = "50%";
    yieldButtonPlayer2.style.opacity = "50%";
} else if (Player1.click == false) {
    hitButtonPlayer1.disabled = false;
    healButtonPlayer1.disabled = false;
    yieldButtonPlayer1.disabled = false;
    hitButtonPlayer1.style.opacity = "100%";
    healButtonPlayer1.style.opacity = "100%";
    yieldButtonPlayer1.style.opacity = "100%";
} */