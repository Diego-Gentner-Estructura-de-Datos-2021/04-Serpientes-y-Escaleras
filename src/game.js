import Dice from './dice.js'

export default class Game {

    constructor(playerA, playerB) {
        this._playerA = playerA;
        this._playerB = playerB;
        this._dado = new Dice();
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
        while (this._playerA.getPosition() < 100 && this._playerB.getPosition() < 100) {
            
            console.log('')
            this._playerA.movePlayer(this._dado.lanzar());
            // this._checkCasilla(this.players.getPlayerPos, 0);
            this._playerB.movePlayer(this._dado.lanzar());
            // this._checkCasilla(this.players.getPlayerPos, 1);

            console.log(this._playerA.getPosition());
            console.log(this._playerB.getPosition());

        }
        return 'a';
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