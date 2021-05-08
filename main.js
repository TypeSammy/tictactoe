// assign playerOne "X" and playerTwo "O"
// assign player turn into a varible
const playerOne = "x"
const playerTwo = "o"
let turnCount = 0
let playersTurn = playerOne

// putting all cells into a DOM element...
const allCellElement = document.querySelectorAll(".cell")
const newGameBtn = document.getElementById("newGameBtn")
const ggBtn = document.getElementById("closePopupBtn")
let playersTurnMessage = document.querySelector("h2")
const gameActiveInfo = document.querySelector(".gameActiveInfo")
const popup = document.querySelector("#popup")
const popupText = document.querySelector("#popupText")
const leftBadge = document.querySelector(".playerOneBadge")
const rightBadge = document.querySelector(".playerTwoBadge")
const row1Elements = document.querySelectorAll(".row1")
const row2Elements = document.querySelectorAll(".row2")
const row3Elements = document.querySelectorAll(".row3")
const column1Elements = document.querySelectorAll(".column1")
const column2Elements = document.querySelectorAll(".column2")
const column3Elements = document.querySelectorAll(".column3")


// looping through all cells to add click event..
for (let i = 0; i < allCellElement.length; i++) {
  allCellElement[i].addEventListener("click", gameStart, { once: true })
}

function gameStart(event) {

  // Switch between players + add to turn count
  event.target.textContent = playersTurn

  if (turnCount % 2 === 0) {
    playersTurn = playerTwo
    turnCount++
    playersTurnMessage.textContent = "Now Player two's turn"
    leftBadge.style.visibility = "hidden"
    rightBadge.style.visibility = "visible"
    event.target.style.color = "rgb(237,237,237)"
  } else {
    turnCount++
    playersTurn = playerOne
    playersTurnMessage.textContent = "It's Player one's turn"
    leftBadge.style.visibility = "visible"
    rightBadge.style.visibility = "hidden"
    event.target.style.color = "rgb(215,195,178)"
  }

  // calling win condition function within gameStart function
  let winner = winCondition()
  // calling the gameOver function and amending the textContent based on the end game conditon
  if (winner || turnCount === allCellElement.length) {
    gameOver()
  }
  if (winner) {
    if (playersTurn === playerOne) {
      popupText.textContent = "Player two wins!"
    } else if (playersTurn === playerTwo) {
      popupText.textContent = "Player one wins!"
    }
  } else if (turnCount === allCellElement.length) {
    popupText.textContent = "It's a draw!"
  }
}


// function to get the values from rows
function cellValues(rowElements) {
  let allValues = []
  for (let i = 0; i < rowElements.length; i++) {
    allValues.push(rowElements[i].textContent)
  }
  return allValues
}

// function to return true if win condition has been met
function winCondition() {

  // initial win condition variable
  let winConditionMet = false

  // storing values of all cells, rows and columns
  let allRowValues = cellValues(allCellElement)
  let row1Values = cellValues(row1Elements)
  let row2Values = cellValues(row2Elements)
  let row3Values = cellValues(row3Elements)
  let column1Values = cellValues(column1Elements)
  let column2Values = cellValues(column2Elements)
  let column3Values = cellValues(column3Elements)

  // all row check with boolean values
  let row1Check = compare(row1Values)
  let row2Check = compare(row2Values)
  let row3Check = compare(row3Values)
  let column1Check = compare(column1Values)
  let column2Check = compare(column2Values)
  let column3check = compare(column3Values)
  let diagonalLeftCheck = false
  let diagonalRightCheck = false

  // function to return boolean ROWS
  function compare(cellValues) {
    if (cellValues[0] != "") {
      if (cellValues[0] === cellValues[1]) {
        if (cellValues[1] === cellValues[2]) {
          return true
        }
      }
    } else {
      return false
    }
  }

  // if statement to compare left diagonal values
  if (allRowValues[0] != "") {
    if (allRowValues[0] === allRowValues[4]) {
      if (allRowValues[4] === allRowValues[8]) {
        diagonalLeftCheck = true
      }
    } else {
      diagonalLeftCheck = false
    }
  }

  // if statement to compare right diagonal values
  if (allRowValues[2] != "") {
    if (allRowValues[2] === allRowValues[4]) {
      if (allRowValues[4] === allRowValues[6]) {
        diagonalRightCheck = true
      }
    } else {
      diagonalRightCheck = false
    }
  }

  // checking if all rows, columns and diagonal values are true/false
  if (row1Check
    || row2Check
    || row3Check
    || diagonalLeftCheck
    || diagonalRightCheck
    || column1Check
    || column2Check
    || column3check) {
    winConditionMet = true
  }
  return winConditionMet
}


// function to remove CSS styling & remove event listener
function gameOver() {
  popup.style.visibility = "visible"
  gameActiveInfo.style.visibility = "hidden"
  rightBadge.style.visibility = "hidden"
  leftBadge.style.visibility = "hidden"

  for (let i = 0; i < allCellElement.length; i++) {
    allCellElement[i].removeEventListener("click", gameStart)
  }
}


// two event listener for reset function
ggBtn.addEventListener("click", reset)
newGameBtn.addEventListener("click", reset)

// function resets counter, player turns and CSS style to the original values, as well as re-add event listener
function reset() {
  turnCount = 0
  playersTurn = playerOne
  for (let i = 0; i < allCellElement.length; i++) {
    allCellElement[i].textContent = ""
    playersTurnMessage.textContent = "Player one's turn"
    leftBadge.style.visibility = "visible"
    rightBadge.style.visibility = "hidden"
    popup.style.visibility = "hidden"
    gameActiveInfo.style.visibility = "visible"
    allCellElement[i].addEventListener("click", gameStart, { once: true })
  }
}


