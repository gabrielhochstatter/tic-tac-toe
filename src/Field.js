class Field {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.owner = "...";
    }

    setOwner(symbol) {
        this.owner = symbol;
    }
}