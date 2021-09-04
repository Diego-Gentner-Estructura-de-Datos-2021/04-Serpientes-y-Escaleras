import Game from "./game.js";
import Players from "./players.js";

let jugadores  = new Players('Carlos', 'Mariana');
let partida = new Game(jugadores);

console.log(partida._tablero);