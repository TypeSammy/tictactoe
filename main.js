// assign playerOne "X" and playerTwo "O"
// assign player turn into a varible
const playerOne = "X"
const playerTwo = "O"
let playersTurn = playerOne

// create a for loop with event listener inside for all the cells (9)
// when cell is clicked assign a value (playersTurn) "X"
// when assigned value is % 2 == 0 then value (playersTurn) turns to "O"

// game ends when (1/2):
//-- WIN condition is met. Win condition is when the SAME VALUE (X or O) is recorded on:
//--// all of row 1 || all of row 2 || all of row 3
//--// all of column 1 || all of column 2 || column of row 3
//--// row1 c1 || row2 c2 || row3 c3 is the same
//--// row1 c3 || row2 c2 || row3 c1 is the same
//----- (8 different scenarios to win)
//--// compare all rows, columns and 2 diagonal results
//--// if one of them returns true
//--// find the value of it (X or O)
//--// display the player who won
//--// game restarts

// game ends when (2/2):
//-- TIE no one won
//--// if playerOne value reaches 5 (5 clicks - even)
//--// and playerTwo value reaches 4 (4 clicks - odd)
//--// game displays DRAW
//--// game restarts


// DOM elements
const allCellElement = document.querySelectorAll(".cell")

for (let i = 0; i < allCellElement.length; i++) {
  let currentTurn = allCellElement[i]
  allCellElement[i].addEventListener("click", function(event) {
    console.log(allCellElement[i])

    // function to switch between players based on even or odd operators
    
    // function to go through all the cells and return the values
    // values get stored in an array?

    // function to go to go through the returned cell values (array) and compare
    // -- assume comparison starts true
    // -- loop through and compare to:
    // -- win scenario if playerOne(even) || playerTwo(odd) 
    // -- ????
    // -- else draw


  })

}


function alternatePlayer() {
  //
}
function gameStart(event) {
  console.log(event.target)
}


let results = [
  6, 1, 8,
  9, 3, 7,
  2, 4, 5
]

0,0,0,  0,0,0,  0,0,0