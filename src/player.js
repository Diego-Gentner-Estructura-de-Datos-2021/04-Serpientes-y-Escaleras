export default class Player {

    constructor(player) {
        this._player = player;
        this._playerPos = 0;
    }

    getPlayer() {
        return this._player;
    }

    getPosition() {
        return this._playerPos;
    }

    movePlayer(pos) {
        this._playerPos += pos;
    }

}