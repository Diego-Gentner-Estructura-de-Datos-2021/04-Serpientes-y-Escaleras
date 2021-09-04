import Game from "./game.js";
import Player from "./player.js";

let jugadores  = new Player('Carlos', 'Mariana');
let partida = new Game(jugadores);

console.log(partida._tablero);