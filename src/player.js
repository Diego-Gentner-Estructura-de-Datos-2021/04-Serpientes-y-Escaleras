export default class Player {

    constructor(player) {
        this._player = player;
        this._playerPos = 1;
    }

    getPlayer() {
        return this._player;
    }

    getPosition() {
        return this._playerPos;
    }

    movePlayer(pos) {
        return this._playerPos += pos;
    }

    setPosition(pos) {
        return this._playerPos = pos;
    }

}