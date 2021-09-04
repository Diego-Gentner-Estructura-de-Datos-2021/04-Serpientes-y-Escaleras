import Dice from './dice.js'

export default class Game {

    constructor(players) {
        this._dado = new Dice();
        this._players = players;
        this._tablero = this._generarTablero()
    }

    _generarTablero() {
        let tablero = new Array;
    }
    


}