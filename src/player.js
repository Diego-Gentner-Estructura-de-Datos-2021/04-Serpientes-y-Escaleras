export default class Player {

    constructor(player) {
        this._player = playerA;
        this._playerPos = 0;
    }

    getPlayer() {
        return this._player;
    }

    getPosition() {
        return this._playerAPos;
    }

    movePlayer(pos) {
        this._playerAPos += pos;
    }

}