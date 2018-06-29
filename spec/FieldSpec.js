describe("Field", function(){
    it("is constructed with the correct position according to the args", function(){
        var testField = new Field(1,1);
        expect(testField.positionX).toEqual(1);
        expect(testField.positionY).toEqual(1);
    });

    it("is constructed with the correct position according to the args", function(){
        var testField = new Field(2,3);
        expect(testField.positionX).toEqual(2);
        expect(testField.positionY).toEqual(3);
    });
});