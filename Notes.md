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
  - user1 get 5 moves, user2 gets 4

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