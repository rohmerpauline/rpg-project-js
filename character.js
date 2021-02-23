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

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
    };
}


document.getElementById("player1").style.display = "none";
document.getElementById("player2").style.display = "none";
document.getElementById("button-log").style.display = "none";

document.getElementById("button-character").addEventListener("click", () => {
// To save Player 1 and Player 2 inputs
    let namePlayer1 = document.getElementById("name-player1").value;
    let racePlayer1 = document.getElementById("race-player1").value;
    let itemPlayer1 = document.getElementById("item-player1").value;
    let namePlayer2 = document.getElementById("name-player2").value;
    let racePlayer2 = document.getElementById("race-player2").value;
    let itemPlayer2 = document.getElementById("item-player2").value;

// Create an object with Player 1 info
    let Player1 = new Person (
        namePlayer1,
        racePlayer1,
        itemPlayer1
    )

Player1.displayChar();

// Create an object with Player 2 info
    let Player2 = new Person (
        namePlayer2,
        racePlayer2,
        itemPlayer2
    )

    Player2.displayChar();

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
    }

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
 
});


    


