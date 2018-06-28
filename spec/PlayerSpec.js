describe("Player", function(){
    var mockField00;
    var mockField01;
    var mockField02;

    var mockField10;
    var mockField11;
    var mockField12;

    var mockField20;
    var mockField21;
    var mockField22;

    var testPlayer;
    beforeEach(function(){
        mockField00 = {
            positionY: 0,
            positionX: 0
        };
        mockField01 = {
            positionY: 0,
            positionX: 1
        };
        mockField02 = {
            positionY: 0,
            positionX: 2
        };
        mockField10 = {
            positionY: 1,
            positionX: 0
        };
        mockField11 = {
            positionY: 1,
            positionX: 1
        };
        mockField12 = {
            positionY: 1,
            positionX: 2
        };
        mockField20 = {
            positionY: 2,
            positionX: 0
        };
        mockField21 = {
            positionY: 2,
            positionX: 1
        };
        mockField22 = {
            positionY: 2,
            positionX: 2
        };
        testPlayer = new Player();
    })

    describe("addField", function(){
        it("adds the field to the markedFields array", function(){
            var expected = [mockField01];
            testPlayer.addField(mockField01);
            expect(testPlayer.markedFields).toEqual(expected);
        });
    });

    describe("hasWon", function(){
        it("returns true when all the players fields have the same posY", function(){
            testPlayer.markedFields = [
                mockField00,
                mockField01,
                mockField02
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });

        it("returns true when all the players fields have the same posX", function(){
            testPlayer.markedFields = [
                mockField00,
                mockField10,
                mockField20
            ];
            expect(testPlayer.hasWon()).toEqual(true);
        });
    });
});