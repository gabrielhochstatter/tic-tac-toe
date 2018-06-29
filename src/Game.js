class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.players = [player1, player2];
        this.activePlayer = this.players[0];
        this.winner = null;
    }

    playTurn(field, player = this.activePlayer) {
        // Assigining field to player
        player.addField(field);
        console.log(field.positionX +","+field.positionY + " added to " + player.playerName);
        if (this.activePlayer.hasWon()) {
            this.winner = this.activePlayer;
            console.log(this.winner.playerName + ' has won!');
        } else {
            // Swapping active player
            this.players = swapInArray(this.players, 0, 1);
            this.activePlayer = this.players[0];
            console.log("it is now " + this.activePlayer.playerName + "'s turn");
        }
    }

    isGameOver() {
        if (this.winner) {
            return true;
        } else {
            return false;
        }
    }
}