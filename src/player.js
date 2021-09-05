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
        this._playerPos += pos;
        this.notOver100();
        return this._playerPos;
    }

    setPosition(pos) {
        this._playerPos = pos;
        return this._playerPos;
    }

    notOver100() {
        if (this._playerPos > 100) {
            this._playerPos = 100;
        }
        return;
    }

}