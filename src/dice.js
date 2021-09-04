export default class Dice {

    pushDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
}