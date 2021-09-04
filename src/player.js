export default class Player {

    constructor(playerA, playerB) {
        this._playerA = playerA;
        this._playerB = playerB;
        this._playerAInitPos = 0;
        this._playerBInitPos = 0;
    }

    getPlayerA() {
        return this._playerA;
    }

    getPlayerB() {
        return this._playerB;
    }

    getPlayerAInitPos() {
        return this._playerAInitPos;
    }

    getPlayerBInitPos() {
        return this._playerBInitPos;
    }

    setPlayerAInitPos(pos) {
        this._playerAInitPos = pos;
    }

    setPlayerBInitPos(pos) {
        this._playerBInitPos = pos;
    }

}