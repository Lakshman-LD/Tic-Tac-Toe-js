// author: lakshman diwaakar
// mail-id: diwaakartg@gmail.com
// tictactoe programmed in spidermonkey.


// the function that has the logic for the tictactoe.
function tictac() {

// array containing the cells of tictactoe.
var board = [];

// function to determine the state of the game after each player's turn.
function isWin(letter) {
   if (((board[0] == letter) && (board[1] == letter) && (board[2] == letter)) ||
         ((board[3] == letter) && (board[4] == letter) && (board[5] == letter)) ||
         ((board[6] == letter) && (board[7] == letter) && (board[8] == letter)) ||
         ((board[0] == letter) && (board[3] == letter) && (board[6] == letter)) ||
         ((board[1] == letter) && (board[4] == letter) && (board[7] == letter)) ||
         ((board[2] == letter) && (board[5] == letter) && (board[8] == letter)) ||
         ((board[0] == letter) && (board[4] == letter) && (board[8] == letter)) ||
         ((board[2] == letter) && (board[4] == letter) && (board[6] == letter))) {
           return true;
         }
         else {
           return false;
         }
}

// helper function for printing the tictactoe board.
function filterUndefined(cell) {
  if( cell == undefined) {
    return "  ";
  }
  else {
    return cell + " ";
  }
}

// function to print the tictactoe board.
// ternary operator doesn't work, may be bad-parts of javascript.
// (board[0] == undefined)? expr1:expr2 doesnt hold good if the value is undefined.
function showTable() {
  print( filterUndefined(board[0]) + "  |  " + filterUndefined(board[1]) + "  |  " + filterUndefined(board[2]));
  print("------------------");
  print( filterUndefined(board[3]) + "  |  " + filterUndefined(board[4]) + "  |  " + filterUndefined(board[5]));
  print("------------------");
  print( filterUndefined(board[6]) + "  |  " + filterUndefined(board[7]) + "  |  "  + filterUndefined(board[8]));
  print("------------------");

}

// output statements to play the game.
print("Who want to start the game - you or comp?");
print("Type \"you\" if you want to start. ");
var answer  = readline();

// if the user starts, user plays X.
if (answer == "you") {
  player = "x";
} else {
  player = "o";
}

print("The cells are numbered from 0 to 8. Enter the number of the cell to play!!!");

// loop to play tictactoe, the maximum number of possibilities a player can play is 5.
for(var i = 0; i<5; i++) {

    // the variable to makesure, the values are filled in an empty cell.
    var x_limit = 0;

    // if the player is X, getting value from the player/user.
    // else, generating random value between 0-8 and make sure the empty cell is chosen.
    while (x_limit < 1) {
      var x;
      if (player == "x") {
      print("enter the the value for x ");
      x = readline();
    } else {
      x = Math.floor(Math.random() * 8) + 1;
    }
      if (board[parseInt(x)] == undefined && (parseInt(x) <= 8)) {
        board[parseInt(x)] = "x";
        x_limit = 1;
      }
      // output statement to help user to enter an empty cell, if he had made mistake in entering an filled cell.
      else if (player == "x") {
        print("Already filled!!! please enter some other box");
      }
    }

    print("After X's move");
    showTable();

    // checking after each turn to know the result.
    if(isWin("x")) {
      print(" X win!!!!");
      return;
    }

    if (i == 4) {
      return;
    }

    // if the player is O, getting value from the player/user.
    // else, generating random value between 0-8 and make sure the empty cell is chosen.

    var y_limit = 0;
    while (y_limit < 1) {
      var o;
      if (player == "o") {
      print("enter the the value for o ");
      o = readline();
    } else {
      o = Math.floor(Math.random() * 8) + 1;
    }
      if (board[parseInt(o)] == undefined && (parseInt(x) <= 8)) {
        board[o] = "o";
        y_limit = 1;
      }
      // output statement to help user to enter an empty cell, if he had made mistake in entering an filled cell.
      else if (player == "o") {
        print("Already filled!!! please enter some other box");
      }


    }
    print("After O's move");
    showTable();

    // checking after each turn to know the result.
    if(isWin("o")) {
      print(" o win!!!!");
      return;
    }


}

}

tictac();
