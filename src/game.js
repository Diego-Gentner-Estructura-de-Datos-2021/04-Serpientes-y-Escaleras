import Dice from './dice.js'

export default class Game {

    constructor(playerA, playerB) {
        this._playerA = playerA;
        this._playerB = playerB;
        this._dado = new Dice();
        this._tablero = this._generarTablero()
        this._winner = false;
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
            
            console.log('');

            console.log(`${this._playerA.getPlayer()}: ${this._playerA.getPosition()} -> ${this._playerA.movePlayer(this._dado.lanzar())}`);
            this._checkCasilla(this._playerA);
            
            console.log(`${this._playerB.getPlayer()}: ${this._playerB.getPosition()} -> ${this._playerB.movePlayer(this._dado.lanzar())}`);
            this._checkCasilla(this._playerB);

        }
        return `\n Fin del Juego - Gracias por Jugar`;
    }

    _checkCasilla(player) {
        if (this._tablero[player.getPosition() - 1] === false) {
            return;
        } else {
            if (this._tablero[player.getPosition() - 1] === true) {
                let x = player.setPosition(this.serpienteOrEscalera(player));
                console.log(`${player.getPlayer()} ha caido en una Serpiente/Escalera, va a la posicion ${x}`)
            } else {
                return this.getWinner(player);
            }
        }

    }

    serpienteOrEscalera(player) {
        switch (player.getPosition()) {

            //Serpientes
            case 10: return 6;
            case 20: return 11;
            case 30: return 26;
            case 40: return 19;
            case 50: return 24;
            case 60: return 53;
            case 70: return 43;
            case 80: return 74;
            case 90: return 78;
            case 95: return 88;

            //Escaleras
            case 5: return 38;
            case 15: return 27;
            case 25: return 31;
            case 35: return 42;
            case 45: return 84;
            case 55: return 44;
            case 65: return 77;
            case 75: return 91;
            case 85: return 99;
        
            default:
                break;
        }
    }

    getWinner(player) {
        if (this._winner === false) {
            console.log(`GANADOR! 1er Lugar es para ${player.getPlayer()}`)
            this._winner = true;
            return;
        } else {
            console.log(`Empate de 2do Lugar es para ${player.getPlayer()}`)
            return;
        }
    }

}