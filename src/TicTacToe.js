var playerX = new Player('Player X', 'X');
var playerO = new Player('Player O', 'O');

var game = new Game(playerX, playerO);

// row 1
var field0 = new Field(1,1);
var field1 = new Field(2,1);
var field2 = new Field(3,1);
// row 2
var field3 = new Field(1,2);
var field4 = new Field(2,2);
var field5 = new Field(3,2);
// row 3
var field6 = new Field(1,3);
var field7 = new Field(2,3);
var field8 = new Field(3,3);
