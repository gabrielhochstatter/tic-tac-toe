/* eslint-disable */ 

describe("Integration Tests", function(){
    var field11;
    var field12;
    var field13;

    var field21;
    var field22;
    var field23;

    var field31;
    var field32;
    var field33;

    var playerX;
    var playerO;

    var game;
    beforeEach(function(){
        field11 = new Field(1,1);
        field12 = new Field(1,2);
        field13 = new Field(1,3);

        field21 = new Field(2,1);
        field22 = new Field(2,2);
        field23 = new Field(2,3);

        field31 = new Field(3,1);
        field32 = new Field(3,2);
        field33 = new Field(3,3);

        playerX = new Player("playerX", "X");
        playerO = new Player("playerO", "O");

        game = new Game(playerX, playerO);
    });

    it("runs a full game where playerX wins", function(){
        // X plays 2,2
        game.playTurn(field22);
        // O plays 1,2
        game.playTurn(field12);
        // X plays 1,1
        game.playTurn(field11);
        // O plays 2,3
        game.playTurn(field23);
        // X plays 3,3 to win
        game.playTurn(field33);
        expect(game.winner).toEqual(playerX);
    });

    it("runs a full game where playerO wins", function(){
        // X plays 2,2
        game.playTurn(field22);
        // O plays 1,2
        game.playTurn(field12);
        // X plays 2,3
        game.playTurn(field23);
        // O plays 1,1
        game.playTurn(field11);
        // X plays 3,2
        game.playTurn(field32);
        // O plays 1,3 to win;
        game.playTurn(field13);
        expect(game.winner).toEqual(playerO);
    });
})