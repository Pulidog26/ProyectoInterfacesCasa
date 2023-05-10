var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sound activated");
});

/* Variables Figuras: */
/* Variables Luz*/
var persona = document.querySelector(".persona");
var luzAlcoba3 = document.querySelector(".Alcoba3");
var luzAlcoba2 = document.querySelector(".Alcoba2");
var luzAlcoba1 = document.querySelector(".Alcoba1");
var luzBaño1 = document.querySelector(".baño1");
var luzBaño2 = document.querySelector(".baño2");
var luzCocina = document.querySelector(".cocina");
var luzLavado = document.querySelector(".lavado");
var luzSala = document.querySelector(".sala");

/* Variables Puertas*/
var puertaAlcoba3 = document.querySelector(".puertaAlcoba3");
var puertaAlcoba2 = document.querySelector(".puertaAlcoba2");
var puertaAlcoba1 = document.querySelector(".puertaAlcoba1");
var puertaBaño1 = document.querySelector(".puertaBaño1");
var puertaBaño2 = document.querySelector(".puertaBaño2");
var puertaPrincipal = document.querySelector(".puertaPrincipal");

/* Variables Ventanas*/
var ventanaAlcoba3 = document.querySelector(".ventanaAlcoba3");
var ventanaAlcoba2 = document.querySelector(".ventanaAlcoba2");
var ventanaAlcoba1 = document.querySelector(".ventanaAlcoba1");
var ventanaBaño1 = document.querySelector(".ventanaBaño1");
var ventanaBaño2 = document.querySelector(".ventanaBaño2");
var ventanaLavado = document.querySelector(".ventanaLavado");
var ventanaIzquierdaBalcon = document.querySelector(".ventanaIzquierdaBalcon");
var ventanaDerechaBalcon = document.querySelector(".ventanaDerechaBalcon");

/* Comandos para mover a Persona */
artyom.addCommands({
    indexes: ["Tercera alcoba", "Segunda alcoba", "Primera alcoba", "Primer baño", "Segundo baño", "Sala", "Cocina", "Lavado", "Ir puerta principal"],
    action: function(i){
        if(i == 0){
            artyom.say("Estoy en la tercera alcoba");            
            persona.style.left = "910px";
            persona.style.top = "270px";
            /*let cont = 10;
            setInterval(function(){
                cont ++;
                if(cont != 47){
                    Persona.style.left = cont +"%";

                }
                Persona.style.top = "25%";
            }, 600)            */
        }
        else if (i == 1){            
            artyom.say("Estoy en la segunda alcoba");            
            persona.style.left = "1120px";
            persona.style.top = "270px";
        }
        else if (i == 2){
            artyom.say("Estoy en la primera alcoba");
            persona.style.left = "1320px";
            persona.style.top = "650px";
        }

        else if (i == 3){
            artyom.say("Estoy en el primer baño");
            persona.style.left = "1120px";
            persona.style.top = "695px";
        }

        else if (i == 4){
            artyom.say("Estoy en el segundo baño");
            persona.style.left = "1000px";
            persona.style.top = "695px";
        }
        else if (i == 5){
            artyom.say("Estoy en la sala");
            persona.style.left = "715px";
            persona.style.top = "290px";
        }

        else if (i == 6){
            artyom.say("Estoy en la cocina");
            persona.style.left = "715px";
            persona.style.top = "630px";
        }

        else if (i == 7){
            artyom.say("Estoy en la zona de lavado");
            persona.style.left = "840px";
            persona.style.top = "630px";
        }

        else if (i == 8){
            artyom.say("Estoy en la puerta principal");
            persona.style.left = "495px";
            persona.style.top = "690px"
        }
    }
})

/* Comandos de encendido y apagado de luz*/
artyom.addCommands({
    indexes: ["Luz tercera alcoba", "Luz segunda alcoba", "Luz primera alcoba", "Luz primer baño", "Luz segundo baño", "Luz sala", "Luz cocina", "Luz lavado"],
    action: function(i){
        if (i == 0){
            if (luzAlcoba3.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la tercera alcoba");
                luzAlcoba3.style.opacity = "50%";
                luzAlcoba3.setAttribute("opacity", "50%");
                
            }
            else{
                artyom.say("Luz apagada en la tercera alcoba");
                luzAlcoba3.style.opacity = "0%";
                luzAlcoba3.setAttribute("opacity", "0%");
            }
            
        }

        else if (i == 1){
            if (luzAlcoba2.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la segunda alcoba");
                luzAlcoba2.style.opacity = "50%";
                luzAlcoba2.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en la segunda alcoba");
                luzAlcoba2.style.opacity = "0%";
                luzAlcoba2.setAttribute("opacity", "0%");
            }
        }

        else if (i == 2){
            if (luzAlcoba1.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la primera alcoba");
                luzAlcoba1.style.opacity = "50%";
                luzAlcoba1.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en la primera alcoba");
                luzAlcoba1.style.opacity = "0%";                
                luzAlcoba1.setAttribute("opacity", "0%");
            }
        }

        else if (i == 3){
            if (luzBaño1.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en el primer baño");
                luzBaño1.style.opacity = "50%";
                luzBaño1.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en el primer baño");
                luzBaño1.style.opacity = "0%";
                luzBaño1.setAttribute("opacity", "0%");
            }
        }

        else if (i == 4){
            if (luzBaño2.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en el segundo baño");
                luzBaño2.style.opacity = "50%";
                luzBaño2.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en el segundo baño");
                luzBaño2.style.opacity = "0%";
                luzBaño2.setAttribute("opacity", "0%");
            }
        }

        else if (i == 5){
            if (luzSala.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la sala");
                luzSala.style.opacity = "50%";
                luzSala.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en la sala");
                luzSala.style.opacity = "0%";
                luzSala.setAttribute("opacity", "0%");
            }
        }

        else if (i == 6){
            if (luzCocina.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la cocina");
                luzCocina.style.opacity = "50%";
                luzCocina.setAttribute("opacity", "50%");                
            }
            else{
                artyom.say("Luz apagada en la cocina");
                luzCocina.style.opacity = "0%";
                luzCocina.setAttribute("opacity", "0%");
            }
        }

        else if (i == 7){
            if (luzLavado.getAttribute("opacity") == "0%"){
                artyom.say("Luz encendida en la zona de lavado");
                luzLavado.style.opacity = "50%";
                luzLavado.setAttribute("opacity", "50%");
            }
            else{
                artyom.say("Luz apagada en la zona de lavado");
                luzLavado.style.opacity = "0%";
                luzLavado.setAttribute("opacity", "0%");
            }
        }
    }
})

/* Comandos Puertas*/
artyom.addCommands({
    indexes: ["Puerta tercera alcoba", "Puerta segunda alcoba", "Puerta primera alcoba", "Puerta primer baño", "Puerta segundo baño", "Puerta principal"],
    action: function(i){
        if (i == 0){
            if (puertaAlcoba3.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta de la tercera alcoba abierta");
                puertaAlcoba3.style.background = "#5cb85c";
                puertaAlcoba3.setAttribute("background", "#5cb85c");
            }
            else{
                artyom.say("Puerta de la tercera alcoba cerrada");
                puertaAlcoba3.style.background = "#ce1919";
                puertaAlcoba3.setAttribute("background", "#ce1919")
            }
        }

        else if (i == 1){
            if (puertaAlcoba2.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta de la segunda alcoba abierta");
                puertaAlcoba2.style.background = "#5cb85c";
                puertaAlcoba2.setAttribute("background", "#5cb85c");
            }
            else{
                artyom.say("Puerta de la segunda alcoba cerrada");
                puertaAlcoba2.style.background = "#ce1919";
                puertaAlcoba2.setAttribute("background", "#ce1919");
            }
        }

        else if (i == 2){
            if (puertaAlcoba1.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta de la primera alcoba abierta");
                puertaAlcoba1.style.background = "#5cb85c";
                puertaAlcoba1.setAttribute("background", "#5cb85c");                
            }
            else{
                artyom.say("Puerta de la primera alcoba cerrada");
                puertaAlcoba1.style.background = "#ce1919";
                puertaAlcoba1.setAttribute("background", "#ce1919");
            }
        }

        else if (i == 3){
            if (puertaBaño1.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta del primer baño abierta");
                puertaBaño1.style.background = "#5cb85c";
                puertaBaño1.setAttribute("background", "#5cb85c");
            }
            else{
                artyom.say("Puerta del primer baño cerrada");
                puertaBaño1.style.background = "#ce1919";
                puertaBaño1.setAttribute("background", "#ce1919");
            }
        }

        else if (i == 4){
            if (puertaBaño2.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta del segundo baño abierta");
                puertaBaño2.style.background = "#5cb85c";
                puertaBaño2.setAttribute("background", "#5cb85c");
            }
            else{
                artyom.say("Puerta del segundo baño cerrada");
                puertaBaño2.style.background = "#ce1919";
                puertaBaño2.setAttribute("background", "#ce1919");
            }
        }

        else if (i == 5){
            if (puertaPrincipal.getAttribute("background") == "#ce1919"){
                artyom.say("Puerta principal abierta");
                puertaPrincipal.style.background = "#5cb85c";
                puertaPrincipal.setAttribute("background", "#5cb85c");                
            }
            else{
                artyom.say("Puerta principal cerrada");
                puertaPrincipal.style.background = "#ce1919";
                puertaPrincipal.setAttribute("background", "#ce1919");
            }            
        }
    }
})

/* Comandos ventanas */
artyom.addCommands({
    indexes: ["Ventana tercera alcoba", "Ventana segunda alcoba", "Ventana primera alcoba", "Ventana primer baño", "Ventana segundo baño", "Ventana lavado", "Ventana izquierda balcón", "Ventana derecha balcón"],
    action: function(i){
        if (i == 0){
            if (ventanaAlcoba3.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana de la tercera alcoba abierta");
                ventanaAlcoba3.style.background = "#00ffff";
                ventanaAlcoba3.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana de la tercera alcoba cerrada");
                ventanaAlcoba3.style.background = "#dd580b";
                ventanaAlcoba3.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 1){
            if (ventanaAlcoba2.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana de la segunda alcoba abierta");
                ventanaAlcoba2.style.background = "#00ffff";
                ventanaAlcoba2.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana de la segunda alcoba cerrada");
                ventanaAlcoba2.style.background = "#dd580b";
                ventanaAlcoba2.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 2){
            if (ventanaAlcoba1.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana de la primera alcoba abierta");
                ventanaAlcoba1.style.background = "#00ffff";
                ventanaAlcoba1.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana de la primera alcoba cerrada");
                ventanaAlcoba1.style.background = "#dd580b";
                ventanaAlcoba1.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 3){
            if (ventanaBaño1.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana del primer baño abierta");
                ventanaBaño1.style.background = "#00ffff";
                ventanaBaño1.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana del primer baño cerrada");
                ventanaBaño1.style.background = "#dd580b";
                ventanaBaño1.setAttribute("background", "#dd580b");
            }
        }

        else if (i== 4){
            if (ventanaBaño2.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana del segundo baño abierta");
                ventanaBaño2.style.background = "#00ffff";
                ventanaBaño2.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana del segundo baño cerrada");
                ventanaBaño2.style.background = "#dd580b";
                ventanaBaño2.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 5){
            if(ventanaLavado.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana zona de lavado abierta");
                ventanaLavado.style.background = "#00ffff";
                ventanaLavado.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana zona de lavado cerrada");
                ventanaLavado.style.background = "#dd580b";
                ventanaLavado.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 6){
            if(ventanaIzquierdaBalcon.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana izquierda del balcón abierta");
                ventanaIzquierdaBalcon.style.background = "#00ffff";
                ventanaIzquierdaBalcon.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana izquierda del balcón cerrada");
                ventanaIzquierdaBalcon.style.background = "#dd580b";
                ventanaIzquierdaBalcon.setAttribute("background", "#dd580b");
            }
        }

        else if (i == 7){
            if(ventanaDerechaBalcon.getAttribute("background") == "#dd580b"){
                artyom.say("Ventana derecha del balcón abierta");
                ventanaDerechaBalcon.style.background = "#00ffff";
                ventanaDerechaBalcon.setAttribute("background", "#00ffff");
            }
            else{
                artyom.say("Ventana derecha del balcón cerrada");
                ventanaDerechaBalcon.style.background = "#dd580b";
                ventanaDerechaBalcon.setAttribute("background", "#dd580b");
            }
        }
    }
})

/*PROTOTIPO LUZ ENCENDIDA Y APAGADA*/ 
/*if(document.querySelector(".Alcoba3").getAttribute("opacity") == "0%"){
                document.querySelector(".Alcoba3").style.opacity = "50%";
                document.querySelector(".Alcoba3").setAttribute("opacity", "50%");
                artyom.say("Luz encendida");
            }
            else{
                document.querySelector(".Alcoba3").setAttribute("opacity", "0%");
                document.querySelector(".Alcoba3").style.opacity = "0%";
                artyom.say("Luz apagada");
            }*/



/*if(0==0){
    console.log(Persona.getAttribute("left"));
}*/

/*if(Persona.style.left == sala && Persona.style.top == sala){
    Persona.style.left = "47.15%";
}*/

/*if(0 == 1){
    document.querySelector(".persona").style.left = "25%";
}
/*if(document.querySelector(".persona").style.left = "10%"/* && document.querySelector(".persona").style.top = "10%"){*/
  /*  document.querySelector(".persona").style.left = "80%";
};*/

artyom.initialize({
    lang:"es-ES",
    debug: true,
    listen: true,
    continuous: true,
    speed: 0.9,
    mode: "normal"
});

artyom.redirectRecognizedTextOutput(function(recognized,isFinal){
    if(isFinal){
        console.log("Texto final reconocido: " + recognized);
    }
    else{
        console.log(recognized);
    }
});

/*const persona = this.add.image(200, 200, 'person');*/
