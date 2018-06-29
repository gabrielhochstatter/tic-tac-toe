describe("Player", function(){
    var mockField11;
    var mockField12;
    var mockField13;

    var mockField21;
    var mockField22;
    var mockField23;

    var mockField31;
    var mockField32;
    var mockField33;

    var testPlayer;
    beforeEach(function(){
        mockField11 = {
            positionY: 1,
            positionX: 1
        };
        mockField12 = {
            positionY: 1,
            positionX: 2
        };
        mockField13 = {
            positionY: 1,
            positionX: 3
        };
        mockField21 = {
            positionY: 2,
            positionX: 1
        };
        mockField22 = {
            positionY: 2,
            positionX: 2
        };
        mockField23 = {
            positionY: 2,
            positionX: 3
        };
        mockField31 = {
            positionY: 3,
            positionX: 1
        };
        mockField32 = {
            positionY: 3,
            positionX: 2
        };
        mockField33 = {
            positionY: 3,
            positionX: 3
        };
        testPlayer = new Player();
    })

    describe("addField", function(){
        it("adds the field to the markedFields array", function(){
            var expected = [mockField12];
            testPlayer.addField(mockField12);
            expect(testPlayer.markedFields).toEqual(expected);
        });
    });

    describe("hasWon", function(){
        it("returns true when 3 of the players fields have the same posY [1]", function(){
            testPlayer.markedFields = [
                mockField11,
                mockField12,
                mockField13
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posY [2]", function(){
            testPlayer.markedFields = [
                mockField21,
                mockField22,
                mockField23
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posY [3]", function(){
            testPlayer.markedFields = [
                mockField31,
                mockField32,
                mockField33
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posY [extra]", function(){
            testPlayer.markedFields = [
                mockField31,
                mockField32,
                mockField33,
                mockField12,
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posX [3]", function(){
            testPlayer.markedFields = [
                mockField13,
                mockField23,
                mockField33
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posX [2]", function(){
            testPlayer.markedFields = [
                mockField12,
                mockField22,
                mockField32
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when 3 of the players fields have the same posX [1]", function(){
            testPlayer.markedFields = [
                mockField11,
                mockField21,
                mockField31
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when a player has marked a diagonal line [1]", function(){
            testPlayer.markedFields = [
                mockField11,
                mockField22,
                mockField33
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when a player has marked a diagonal line [2]", function(){
            testPlayer.markedFields = [
                mockField22,
                mockField13,
                mockField31
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });
    });
});