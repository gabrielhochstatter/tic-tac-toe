/* eslint-disable */ 

describe("Game", function(){
    var mockPlayerX;
    var mockPlayerO;
    var mockField;
    var mockWinner;
    var mockLoser;
    var testGame;
    beforeEach(function(){
        mockPlayerX = {
            symbol: "X",
            addField: function(){
                return true;
            },
            hasWon: function(){
                return false;
            }
        }
        mockPlayerO = {
            symbol: "O",
            addField: function(){
                return true;
            },
            hasWon: function(){
                return false;
            }
        }
        mockWinner = {
            playerName: "winner",
            addField: function(){
                return true;
            },
            hasWon: function(){
                return true;
            }
        }
        mockLoser = {
            name: "loser",
            hasWon: function(){
                return false;
            }
        }
        mockField = {
            positionX: 1,
            positionY: 1
        }

        testGame = new Game(mockPlayerX, mockPlayerO);
        finishedGame = new Game(mockWinner, mockLoser)

        spyOn(mockPlayerX, 'addField');
        // spyOn(mockWinner, 'hasWon');
        // spyOn(mockLoser, 'hasWon');
    });

    describe("playTurn", function(){
        it("calls addField on the active player with correct argument", function(){
            testGame.playTurn(mockField);
            expect(mockPlayerX.addField).toHaveBeenCalledWith(mockField);
        });

        it("swaps the active player if no one has won", function(){
            testGame.playTurn(mockField);
            expect(testGame.activePlayer).toEqual(mockPlayerO);
        });
        
        it("sets the winner if someone has won", function(){
            finishedGame.playTurn(mockField);
            expect(finishedGame.winner).toEqual(mockWinner.playerName);
        });
    });

    describe("isGameOver", function(){
        it("returns false if no one has won yet", function(){
            expect(testGame.isGameOver()).toEqual(false);
        });

        it("returns true if one of the players has won", function(){
            finishedGame.playTurn(mockField);
            expect(finishedGame.isGameOver()).toEqual(true);
        });
    });
    
});