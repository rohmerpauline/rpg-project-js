/* ************************** SCRIPT GAME ************************** */

let playerAttack;
let healPlayer;

//Use this script to generate your character
function Person(name, race,item){
    this.name = name;
    this.race = race;

    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.click = false;

    this.heal = function(){
        this.currenthealth = this.currenthealth + healPlayer;
        if (this.currenthealth > this.maxHealth) {
            this.currenthealth = this.maxHealth;
        }
    };

    this.damage = function (){
        this.currenthealth = this.currenthealth - playerAttack;
        if (this.currenthealth < 0) {
            this.currenthealth = 0;
        }
    }; 

    this.totalDamage = this.damage();

    this.clicked = function(playerClicking, playerNotClicking) {
        playerClicking.click = true;
        playerNotClicking.click = false;
        console.log(playerClicking.name + playerClicking.click);
        console.log(playerNotClicking.name + playerNotClicking.click);
    }

    // health is impacted by damagePlayer once before games starts, so to fix it :
    this.currenthealth = this.maxHealth;

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };

    this.itemOfPlayer = function (playerClicking, playerNotClicking) {
        healPlayer = Math.floor(Math.random()*(this.maxHealing))+ this.min;
        playerAttack = Math.floor(Math.random()*(this.maxDamage))+ this.min;
        console.log(playerAttack);
        console.log(healPlayer)
        if (this.item == "Sword") {
            playerAttack *= 1.3;
            console.log(playerAttack);
        } else if (this.item == "Bow") {
            let randomBow = Math.floor(Math.random()*(100))+ 1;
            if (randomBow <= 30) {
                playerNotClicking.damage();
            }  
        } else if (playerNotClicking.item == "Boots") {
            let randomBoots = Math.floor(Math.random()*(100))+ 1;
            if (randomBoots <= 30) {
                playerAttack = 0;
            }
        } else if (playerClicking.item == "Staff") {
            healPlayer *= 1.2;
            console.log(healPlayer);
        }
    };

    if (this.race =="Orc") {
        this.maxHealth *= 1.4;
        this.currenthealth = this.maxHealth;
    };

    this.raceOfPlayer = function (playerClicking, playerNotClicking) {
        if (playerNotClicking.race == "Human") {
            playerAttack *= 0.8;
            console.log(playerAttack);
        } else if (playerNotClicking.race == "Elf") {
            playerNotClicking.currenthealth += playerAttack;
            playerClicking.currenthealth -= (playerAttack*0.5);
        } else if (playerClicking.race == "Vampire") {
            playerClicking.currenthealth += (playerNotClicking.currenthealth*0.1);
            playerNotClicking.currenthealth -= (playerNotClicking.currenthealth*0.1);
                if (playerClicking.currenthealth > playerClicking.maxHealth) {
                    playerClicking.currenthealth = playerClicking.maxHealth;
                } 
            } 
        };

    };

/* ************************** GET INFO ************************** */

document.getElementById("player1").style.display = "none";
document.getElementById("player2").style.display = "none";
document.getElementById("button-log").style.display = "none";
let Player1;
let Player2;

document.getElementById("button-character").addEventListener("click", () => {
// To save Player 1 and Player 2 inputs
    let namePlayer1 = document.getElementById("name-player1").value;
    let racePlayer1 = document.getElementById("race-player1").value;
    let itemPlayer1 = document.getElementById("item-player1").value;
    let namePlayer2 = document.getElementById("name-player2").value;
    let racePlayer2 = document.getElementById("race-player2").value;
    let itemPlayer2 = document.getElementById("item-player2").value;

// Create an object with Player 1 info
    Player1 = new Person (
        namePlayer1,
        racePlayer1,
        itemPlayer1
    )

// Create an object with Player 2 info
    Player2 = new Person (
        namePlayer2,
        racePlayer2,
        itemPlayer2,
        )


// To show the Player 1 character in the game
let img = document.createElement("img");
    switch (racePlayer1) {
        case "Orc" : 
            img.src = "images/orc.png";
            document.getElementById("player1-character").appendChild(img); 
        break;
        case "Human" :
            img.src = "images/human.png";
            document.getElementById("player1-character").appendChild(img);
        break;
        case "Elf" :
            img.src = "images/elf.png";
            document.getElementById("player1-character").appendChild(img);
        break;
        case "Vampire" :
            img.src = "images/vampire.png";
            document.getElementById("player1-character").appendChild(img);
        break;
    };

// To show the Player 2 character in the game
    let img2 = document.createElement("img");
    switch (racePlayer2) {
        case "Orc" : 
            img2.src = "images/orc.png";
            document.getElementById("player2-character").appendChild(img2); 
        break;
        case "Human" :
            img2.src = "images/human.png";
            document.getElementById("player2-character").appendChild(img2);
        break;
        case "Elf" :
            img2.src = "images/elf.png";
            document.getElementById("player2-character").appendChild(img2);
        break;
        case "Vampire" :
            img2.src = "images/vampire.png";
            document.getElementById("player2-character").appendChild(img2);
        break;
    };

document.getElementById("player1-name").innerHTML = namePlayer1;
document.getElementById("player2-name").innerHTML = namePlayer2;
document.getElementById("player1-item").innerHTML = itemPlayer1;
document.getElementById("player2-item").innerHTML = itemPlayer2;

document.getElementById("character1").style.display = "none";
document.getElementById("character2").style.display = "none";
document.getElementById("button-create").style.display = "none";

document.getElementById("player1").style.display = "block";
document.getElementById("player2").style.display = "block";
document.getElementById("button-log").style.display = "block";

document.getElementById("health-player1").style.width = Player1.maxHealth + "%";
document.getElementById("health-player2").style.width = Player2.maxHealth + "%";

let playerPlayFirst = Math.floor(Math.random()*2)+1;
if (playerPlayFirst == 1) {
    document.getElementById("hit-player2").disabled = true;
    document.getElementById("heal-player2").disabled = true;
    document.getElementById("yield-player2").disabled = true;
    document.getElementById("hit-player2").style.opacity = "50%";
    document.getElementById("heal-player2").style.opacity = "50%";
    document.getElementById("yield-player2").style.opacity = "50%";
} else if (playerPlayFirst == 2) {
    document.getElementById("hit-player1").disabled = true;
    document.getElementById("heal-player1").disabled = true;
    document.getElementById("yield-player1").disabled = true;
    document.getElementById("hit-player1").style.opacity = "50%";
    document.getElementById("heal-player1").style.opacity = "50%";
    document.getElementById("yield-player1").style.opacity = "50%"; 
}

});

