import Dice from './dice.js'

export default class Game {

    constructor(players) {
        this._dado = new Dice();
        this._players = players;
        this._tablero = this._generarTablero()
    }

    _generarTablero() {
        let tablero = new Array;
        for (let i = 0; i <= 100; i++) {
            for (let z = 0; z < 4; z++) {
                tablero.push(false);
            }
            tablero.push(true);
        }
        return tablero;
    }

}