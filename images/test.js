/* document.getElementById("heal-player1").addEventListener("click", () => {
    if (Player1.currenthealth < 100) {
        let healPlayer = Math.floor(Math.random()*(Player1.maxHealing))+ Player1.min;
        console.log(healPlayer);
        let playerHealth = Player1.currenthealth + healPlayer;
        Player1.currenthealth = playerHealth;
        document.getElementById("health-player1").style.width = playerHealth + "%";
        if (Player1.currenthealth > Player1.maxHealth) {
            Player1.currenthealth = 100;
            document.getElementById("health-player1").style.width = "100%";
        }
    } 
    console.log(document.getElementById("health-player1").style.width);
});  */

document.getElementById("heal-player2").addEventListener("click", (Player1, Player2) => {
    if (Player2.currenthealth < 100) {
        let healPlayer = Math.floor(Math.random()*(Player2.maxHealing))+ Player2.min;
        console.log(healPlayer);
        let playerHealth = Player2.currenthealth + healPlayer;
        Player2.currenthealth = playerHealth;
        document.getElementById("health-player2").style.width = playerHealth + "%";
        if (Player2.currenthealth > Player2.maxHealth) {
            Player2.currenthealth = Player2.maxHealth;
            document.getElementById("health-player2").style.width = "100%";
        }
    } 
    console.log(document.getElementById("health-player2").style.width);
}); 

document.getElementById("hit-player1").addEventListener("click", () => {
    let attackPlayer = Math.floor(Math.random()*(Player1.maxDamage))+ Player1.min;
    console.log(attackPlayer);
    Player2.currenthealth = Player2.currenthealth - attackPlayer;
    if (Player2.currenthealth < 0) {
        Player2.currenthealth = 0;
    }
    document.getElementById("health-player2").style.width = Player2.currenthealth + "%";
console.log(document.getElementById("health-player2").style.width);
}); 

document.getElementById("hit-player2").addEventListener("click", () => {
    if (Player1.currenthealth > 0) {
        let attackPlayer = Math.floor(Math.random()*(Player2.maxDamage))+ Player2.min;
        let playerHealth = Player1.currenthealth - attackPlayer;
        Player1.currenthealth = playerHealth;
        console.log(playerHealth);
        document.getElementById("health-player1").style.width = playerHealth + "%";
        if (Player1.currenthealth < 0) {
            Player1.currenthealth = 0;
            document.getElementById("health-player1").style.width = "0%";
        }
    }
    console.log(document.getElementById("health-player1").style.width);
}); 


let message = document.getElementById("gamelog-text");
message.appendChild.innerHTML("<p> blablabla </p>");

this.damage = function (attacker, attackee){

    damagePlayer = Math.floor(Math.random()*(this.maxDamage))+ this.min;
    console.log(damagePlayer);
    this.currenthealth = this.currenthealth - damagePlayer;
    if (this.currenthealth < 0) {
        this.currenthealth = 0;
    };
};