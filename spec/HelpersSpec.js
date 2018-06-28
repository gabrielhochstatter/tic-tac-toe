describe("countInArray", function(){
    it("returns the number of times a value appears in an array [1]", function(){
        var exampleArray = [1,1,1,2];
        expect(countInArray(exampleArray, 1)).toEqual(3);
    });

    it("returns the number of times a value appears in an array [2]", function(){
        var exampleArray = [6,1,6,2];
        expect(countInArray(exampleArray, 6)).toEqual(2);
    });
});
