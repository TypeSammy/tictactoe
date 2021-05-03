// assign playerOne "X" and playerTwo "O"
// assign player turn into a varible
const playerOne = "x"
const playerTwo = "o"
let turnCount = 0
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


// putting all cells into a DOM element...
const allCellElement = document.querySelectorAll(".cell")

// looping through all cells to add click event..
for (let i = 0; i < allCellElement.length; i++) {
  // assigning DOM elements to variables...
  let currentTurn = allCellElement[i]
  let maxCells = allCellElement.length
  let row1Elements = document.querySelectorAll(".row1")
  let row2Elements = document.querySelectorAll(".row2")
  let row3Elements = document.querySelectorAll(".row3")



  // Event listener added for all cells + game functions
  allCellElement[i].addEventListener("click", gameStart)

    function gameStart(event) {
      // Switch between players + add to turn count...
      event.target.innerText = playersTurn
      if (turnCount % 2 === 0) {
        playersTurn = playerTwo
        turnCount++
        allCellElement[i].removeEventListener("click", gameStart)
      } else {
        turnCount++
        playersTurn = playerOne
        allCellElement[i].removeEventListener("click", gameStart)
      }
      if (turnCount === maxCells) {
        console.log("it's a tie")
      }




      // function to the values from rows...
      function cellValues(rowElements) {
        let allValues = []

        for (let i = 0; i < rowElements.length; i++) {
          allValues.push(rowElements[i].textContent)
        }
        return allValues
      }
      // storing row values...
      let allRowValues = cellValues(allCellElement)
      let row1Values = cellValues(row1Elements)
      let row2Values = cellValues(row2Elements)
      let row3Values = cellValues(row3Elements)

    }
  }




/*
for (let i = 0; i < test.length; i++) {
let firstNum = test[0]
if (firstNum === test[i].length) {
console.log('true')
} else {
console.log('false')
}
}
*/

  // function to switch between players based on even or odd operators

  // function to go through all the cells and return the values
  // values get stored in an array?

  // function to go to go through the returned cell values (array) and compare
  // -- assume comparison starts true
  // -- loop through and compare to:
  // -- win scenario if playerOne(even) || playerTwo(odd) 
  // -- ????
  // -- else draw

// in order to win:
// "0","0","0",  "0","0","0",  "0","0","0"



// let results = [
//   0, 0, 0,
//   0, 0, 0,
//   0, 0, 0
// ]

// 0,0,0,  0,0,0,  0,0,0