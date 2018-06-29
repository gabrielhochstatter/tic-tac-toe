class Player {
    constructor(playerName = "player", symbol = "X") {
        this.playerName = playerName;
        this.symbol = symbol;
        this.markedFields = [];
    }

    addField(field) {
        this.markedFields.push(field);
        return this.markedFields;
    }

    hasWon() {
        let posXArray = this.markedFields.map(v => v.positionX);
        let posYArray = this.markedFields.map(v => v.positionY);
        let positionArray = this.markedFields.map(
            v => parseInt(v.positionX + "" + v.positionY)
        );
        let diagonalWinCondition1 = [11,22,33];
        let diagonalWinCondition2 = [31,22,13];
        if (countInArray(posYArray, 1) === 3) { 
            return true;
        } else if (countInArray(posYArray, 2) === 3) {
            return true;
        } else if (countInArray(posYArray, 3) === 3) {
            return true;
        } else if (countInArray(posXArray, 1) === 3) { 
            return true;
        } else if (countInArray(posXArray, 2) === 3) {
            return true;
        } else if (countInArray(posXArray, 3) === 3) {
            return true;
        } else if (diagonalWinCondition1.every((val) => positionArray.includes(val))) {
            return true;
        } else if (diagonalWinCondition2.every((val) => positionArray.includes(val))) {
            return true;
        } else {
            return false
        }
    }
}

