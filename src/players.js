export default class Players {

    constructor(playerA, playerB) {
        this._playerA = playerA;
        this._playerB = playerB;
        this._playerAPos = 0;
        this._playerBPos = 0;
    }

    getPlayerA() {
        return this._playerA;
    }

    getPlayerB() {
        return this._playerB;
    }

    getPlayerAPos() {
        return this._playerAPos;
    }

    getPlayerBPos() {
        return this._playerBPos;
    }

    movePlayerA(pos) {
        this._playerAPos += pos;
    }

    movePlayerB(pos) {
        this._playerBPos += pos;
    }

}