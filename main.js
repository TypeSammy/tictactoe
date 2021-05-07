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




// looping through all cells to add click event..
for (let i = 0; i < allCellElement.length; i++) {
  // assigning DOM elements to variables...
  const row1Elements = document.querySelectorAll(".row1")
  const row2Elements = document.querySelectorAll(".row2")
  const row3Elements = document.querySelectorAll(".row3")
  const column1Elements = document.querySelectorAll(".column1")
  const column2Elements = document.querySelectorAll(".column2")
  const column3Elements = document.querySelectorAll(".column3")



  // Event listener added for all cells + game functions
  allCellElement[i].addEventListener("click", gameStart, {once: true})

  function gameStart(event) {
    // Switch between players + add to turn count...
    event.target.textContent = playersTurn


    if (turnCount % 2 === 0) {
      playersTurn = playerTwo
      turnCount++
      playersTurnMessage.textContent = "Now Player two's turn"
      leftBadge.style.visibility = "hidden"
      rightBadge.style.visibility = "visible"
      allCellElement[i].style.color = "rgb(237,237,237)"
    } else {
      turnCount++
      playersTurn = playerOne
      playersTurnMessage.textContent = "It's Player one's turn"
      leftBadge.style.visibility = "visible"
      rightBadge.style.visibility = "hidden"
    }




    // function to get the values from rows
    function cellValues(rowElements) {
      let allValues = []
      for (let i = 0; i < rowElements.length; i++) {
        allValues.push(rowElements[i].textContent)
      }
      return allValues
    }
    // storing values of all cells, rows and columns
    let allRowValues = cellValues(allCellElement)
    let row1Values = cellValues(row1Elements)
    let row2Values = cellValues(row2Elements)
    let row3Values = cellValues(row3Elements)
    let column1Values = cellValues(column1Elements)
    let column2Values = cellValues(column2Elements)
    let column3Values = cellValues(column3Elements)






    // function to return true if win condition has been met
    function winCondition() {
      // initial win condition variable
      let winConditionMet = false

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

    let winner = winCondition()

    // loop to change DOM elements based on end game results

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


    function gameOver() {
      popup.style.visibility = "visible"
      gameActiveInfo.style.visibility = "hidden"
      rightBadge.style.visibility = "hidden"
      leftBadge.style.visibility = "hidden"

      for (let i = 0; i < allCellElement.length; i++) {
      return allCellElement[i].removeEventListener("click", gameStart, {once: true})
      }
      
    }











    // for (let i = 0; i < allCellElement.length; i++) {
    //   if (winner) {
    //     rightBadge.style.visibility = "hidden"
    //     leftBadge.style.visibility = "hidden"
    //     popup.style.visibility = "visible"
    //     gameActiveInfo.style.visibility = "hidden"
    //     if (playersTurn === playerOne) {
    //       popupText.textContent = "Player two wins!"
    //     } else if (playersTurn === playerTwo) {
    //       popupText.textContent = "Player one wins!"
    //     }
    //   } else if (turnCount === allCellElement.length) {
    //     popupText.textContent = "It's a draw!"
    //     popup.style.visibility = "visible"
    //     gameActiveInfo.style.visibility = "hidden"
    //     rightBadge.style.visibility = "hidden"
    //     leftBadge.style.visibility = "hidden"
    //   }
    // } 




    // game resets via two buttons and re-adds event listener
    ggBtn.addEventListener("click", reset)
    newGameBtn.addEventListener("click", reset)
    function reset() {
      for (let i = 0; i < allCellElement.length; i++) {
        allCellElement[i].textContent = ""
        turnCount = 0
        playersTurn = playerOne
        playersTurnMessage.textContent = "Player one's turn"
        leftBadge.style.visibility = "visible"
        rightBadge.style.visibility = "hidden"
        popup.style.visibility = "hidden"
        gameActiveInfo.style.visibility = "visible"
      }
      allCellElement[i].addEventListener("click", gameStart, {once: true})
    }

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
// "0","1","2",  "3","4","5",  "6","7","8"



// let results = [
//   0, 1, 2,
//   3, 4, 5,
//   6, 7, 8
// ]

// 0,0,0,  0,0,0,  0,0,0