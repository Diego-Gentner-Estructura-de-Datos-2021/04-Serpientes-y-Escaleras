import Game from "./game.js";
import Player from "./player.js";

let playerA  = new Player('Mariana');
let playerB  = new Player('Carlos');
let partida = new Game(playerA, playerB);

console.log(partida._tablero);
console.log(partida.runGame());