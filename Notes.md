# BREAKDOWN
User interface:
- Heading
- Two input for names of players
- 3x3 grid
- display who's turn it is
- display who won or tied
- new game button

***

The rules:
- player wins by 3 in a row diagonally (2), horizontally (3) or vertically (3)
- ends in a tie if all 9 grids have been clicked and no winners

***

Need:
- User1 = X, user2 = O
- Always start on User1

  - first click assign X
  - next on click assign O
  - repeat ..
    - check last click and compare 9x
    - What was last click? Compare last value to current value, will always return false. If false +1 (new value) 9x
    - or until win condition has been met

- Game ends when win condition is met:
  - X or O, 3x in a row diagonally (2), horizontally (3) or vertically (3)
  - what are the values of row 1? (0, 0, 0)
  - what are the values of row 2? (0, 0, 0)
  - what are the values of row 3? (0, 0, 0)
    - are any of the 3 rows the same?
    - are any of the 1st value of each row the same?
    - .. same with 2nd value
    - .. same with 3rd value
    - is the 1st cell of row1, 2nd cell of row 2, and 3rd cell of row 3 the same?
    - is the 3rd cell of row1, 2nd cell of row 2 and 1st cell of row 3 the same?
  - Was it user1 or user2 who got the 3 in a row?
  - display user

- All 9 grids taken up
  - no win condition met
  - display draw
  - start new game or direct to button to start new game

***

```js
const playerOne = "o"
const playerTwo = "x"


const allBoxElement = document.querySelector("#main-game")

allBoxElement.addEventListener("click", function (event) {
  console.log(event.target)
})

let board = [0, 0, 0, 0, 0, 0, 0, 0, 0] // represents the board in code

// DO LOGIC ONLY IN THE CODE

// Separate presentation step to actually display the board to the user in HTML

function player1Players() {
  board[0] = 1
}
// separated presentation step
function displayTheBoard(board) {
  //create all the divs for us and fill them with the correct values
  // click handlers, etc
}

// 1. set up the board

// 2. have a way for users to click to add their X or O

// 3. check if the user won
// have they got 3 in a row somewhere?
// -- have they got 3 in row in row 1?
// ---- get all value in row 1
// ---- add a class to each element in row 1
// ---- use querySelectorAll with our class
// ---- check if all values are the same

// -- have they got 3 in a row in row 2?
// ---- get all value in row 1
// ---- check if all values are the same

// -- have they got 3 in a row in row 3?
// ---- get all value in row 1
// ---- check if all values are the same

// -- ... collumn
// ---- get all value in row 1
// ---- check if all values are the same

// -- have they got 3 in a row diagonal somewhere


checkIfUserWon();

function checkIfUserWon() {
  if (doTheyHaveThreeInARow()) {
    //they won
    console.log('they won')
  } else {
    // keep playing
  }
}

function doTheyHaveThreeInARow() {
  if (doTheyHaveThreeInARowInRow1() 
  || doTheyHaveThreeInARowInRow2()
  || doTheyHaveThreeInARowInRow3())
  //..
}

function doTheyHaveThreeInARowInRow1() {

}


function getRowValues(rowElements) {
  let newArray = []
  for (let i = 0; i < rowElements.length; i++) {
    newArray.push(rowElements[i].textContent)
  }
  return newArray
}

// areAllValuesTheSame(getFirstRowElements())

let row1Values = getRowValues(document.querySelectorAll(".row1"))
let row2Values = getRowValues(document.querySelectorAll(".row2"))
let row3Values = getRowValues(document.querySelectorAll(".row3"))


// <input type="text" placeholder="Player 2's name" id="playerTwoName">
// counter = each click changes. each increments 
// if currently blue then change to red
// if this already this value? next time change it


```