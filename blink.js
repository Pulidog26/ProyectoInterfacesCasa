var jf = require("johnny-five");
var tarjeta = new jf.Board();
tarjeta.on("ready", encender);

function encender(){
    var foquito = new jf.Led(5);
    foquito.blink(1000);
}