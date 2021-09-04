import Dice from './dice.js'

export default class Game {

    constructor(players) {
        this._dado = new Dice();
        this._players = players;
        this._tablero = this._generarTablero()
    }

    _generarTablero() {
        let tablero = new Array;
        for (let i = 1; i <= 20; i++) {
            for (let z = 1; z < 5; z++) {
                tablero.push(false);
            }
            tablero.push(true);
        }
        tablero.pop();
        tablero.push(null);
        return tablero;
    }

    runGame() {
        while (this._players.getPlayerAPos() < 100 && this._players.getPlayerBPos() < 100) {
            
            this._players.movePlayerA(this._dado.lanzar());
            this._checkCasilla(this.players.getPlayerAPos, 0);
            this._players.movePlayerB(this._dado.lanzar());
            this._checkCasilla(this.players.getPlayerBPos, 1);

        }
    }

    _checkCasilla(value) {
        
        if (this._tablero[value - 1] === false) {
            return;
        } else {
            if (this._tablero[value - 1] === true) {
                this.serpienteOrEscalera()
            } else {
                
            }
        }

    }

    serpienteOrEscalera() {

    }

}