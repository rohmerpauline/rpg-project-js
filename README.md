# rpg-project-js

[Le résultat ICI](https://rohmerpauline.github.io/rpg-project-js/)  

## L'objectif du projet 


<details><summary>Game example (It does not have to look like this!).</summary>

![](resources/Image1.jpg)
</details>

Each calculation should run for one attack. For instance, if I have a bow and decide to attack. I might get lucky and strike twice.
If the opponent wears boots, he could dodge the attack twice, once or never.


| ITEMS | Boots                                | Staff                  | Sword           | Bow                          |
|-------|--------------------------------------|------------------------|-----------------|------------------------------|
|       | 30% chance to dodge an attack        | 20% increase in healing| 30% more damage | 30% chance to attack twice   |

<br>

| RACE | Humans               | Orcs                    | Elves                                                         | Vampires                                                |
|------|----------------------|-------------------------|---------------------------------------------------------------|----------------------------------------------------|
|      |20% less damage taken |40% more max health      | 30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage. |10% lifesteal from opponents current health at start of the vampire's turn. |

**ATTENTION**  
In the `character.js` file, you can define what effects will take place on certain events.
If the player is an orc and if he/she has boots, the stats will take effect straight on creation.

I also expect you to randomize the healing and attack function. Feel free to edit the script to your likings. 

Journey 1 will have more visual related challenges, journey 2 will have more gamelogic related challenges.  

## Journey 1 - Player 1


<details><summary>Starts here!</summary>   
<br>

**Challenge 1:**

Create an HTML page with the following elements included:

* A title.
* An element to display both characters stats (visual, name, item, health...) [Something like a VS screen](https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/2050964/910/607/m1/fpnw/wm0/sample8-.jpg?1482262310&s=b524ce6f06ee59486cfa7ffa7a78ad99)
* A panel with 6 buttons, 3 for each player (hit, heal & yield. Those are the moves.)
* A creation panel with inputs & dropdowns to create your character. (For now only name, items and race )
* A log that will tell you which move the player made.

**Challenge 2:**  

Use the character.js file and save the inputs inside variables/an object, and use them to initiate new characters for both players.

**Challenge 3:**

Make sure that only the title, VS screen and the input field are visible when creating the characters.

**Challenge 4**

When the characters are created, the creation panel should disappear. After this, the `moves` & `log` panel should appear.

**Challenge 5**

Display the health bar of both players this should work real-time.
Make sure it has a decrease/increase animation
Make use of max-health and currentHealth.


<details><summary> Finished? </summary>

**Great! Now proceed.**

![](https://media.giphy.com/media/2wSCG8Xf1sLlwyAwUV/giphy.gif)

</details>

</details>

## Journey 2 - Player 2

<details><summary>Starts here!</summary>  
<br>

**Challenge 1:**

Create a js file named `gamelogic.js`. You are in charge of writing the game itself.
Take a look at the `character.js` file you will have to use it.

**Note**: You will have to work with this file as well. Its up to you to find out what belongs where.

**Challenge 2:**

Initiate a temporary character. We will use this to test our game logic.

**Challenge 3:**

Write a function that will handle the races. This will only run once.

**Challenge 4:**

Write a function that will handle the items. This will be called everytime we make a move. 

**Challenge 5:**

Make the functions work with the character. See if the stats change on creation.

**Challenge 6:**

Lower the health of your object and create a healing function that will use the `heal` function. (character.js)
Make it so the function uses a random number between the minHealing and maxHealing.

**Note:** The `currentHealth` should **NEVER** go above the `maxHealth`

<details><summary> Finished? </summary>

**Great! Now proceed**

![](https://media.giphy.com/media/2wSCG8Xf1sLlwyAwUV/giphy.gif)

</details>
</details>


## The Boss

We are almost finished. There are still some things to tackle.

Here is a list of what you should work out:

* Combine the code + html for some 'working result'.
* Inputs should generate the characters stats.
* Work out the attack function (Almost the same as heal but it has to hit the enemy).
* When a player loses, display a victory message & a loose message for each player.
* At the end of the game, you should be able to restart the game to create a new character.

## Languages utilisés 

HTML, CSS, JavaScript

### Projet réalisé en solo 

Pauline Rohmer

**Projet réalisé dans le cadre de la formation [BeCode](https://becode.org)**