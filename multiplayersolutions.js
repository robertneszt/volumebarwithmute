// //ideas for game logic of having player turns/separte moving:
// add this check before the location update and dice roll, 
// and also update the UI to reflect the current player's turn.
// create a variable called currentPlayer and set it to 1 at the start of the game.
//  Then inutton's onclick function, check the value of currentPlayer
//   before updating the player's location and rolling the dice.

let currentPlayer = 1;

buttonElement.onclick = function() {
    if (currentPlayer === 1) {
        // insert code to roll the dice and update player 1's location
        currentPlayer = 2;
    } else {
        // insert code to roll the dice and update player 2's location
        currentPlayer = 1;
    }
}


// potential solution 2:function for each player

function player1(){
    // insert code to roll the dice and update player 1's location
    currentPlayer = 2;
}
function player2(){
    // insert code to roll the dice and update player 2's location
    currentPlayer = 1;
}

buttonElement.onclick = function(){
    if(currentPlayer === 1) player1()
    else player2()
}


// more than 2 player ideas: When the button is clicked,
//  the code rolls the dice, updates the current player's location,
//  moves their marker on the board,
//  checks for a winning condition, and switches to the next player.

let players = [{ name: "Player 1", location: 0 }, { name: "Player 2", location: 0 }];
let currentPlayer = 0; // throwing error because of first solution
let numberOfPlayers = 2;

buttonElement.onclick = function() {
    // roll the dice and update the current player's location
    let randomNumber = Math.trunc(Math.random() * 6 + 1);
    players[currentPlayer].location += randomNumber;

    // move the player's marker on the board
    let playerId = `#player${currentPlayer + 1}`;
    $(playerId).appendTo(`#div${players[currentPlayer].location}`);

    // check for winning condition
    if (players[currentPlayer].location >= 25) {
        document.querySelector(".header").innerText =
            `${players[currentPlayer].name} wins! Game over! Refresh the page to play again`;
        buttonElement.innerText = "Play again";
        buttonElement.onclick = window.location.reload();
    }

    // switch to the next player
    currentPlayer++;
    if (currentPlayer >= numberOfPlayers) {
        currentPlayer = 0;
    }
}

///To make this code work with a variable number of players,
// change the number of players in the players array and the numberOfPlayers variable
//   and the code will work for 2 to 4 players. 
//  also will need to add the relevant images and elements to the HTML and CSS, 
// and update the player's marker accordingly.