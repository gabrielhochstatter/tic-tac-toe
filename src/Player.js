class Player {
    constructor(symbol = "X") {
        this.symbol = symbol;
        this.markedFields = [];
    }

    addField(field) {
        this.markedFields.push(field);
        return this.markedFields;
    }

    hasWon() {
        
    }
}

