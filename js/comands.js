var artyom = new Artyom();

document.querySelector("#activar").addEventListener('click', function(){
    artyom.say("sound activated");
});

artyom.addCommands({
    indexes: ["Tercera alcoba", "Alcoba dos", "Alcoba uno", "Baño uno", "Baño dos", "Sala", "Cocina", "Lavado", "Apagar luz habitación tres", "ROJO"],
    action: function(i){
        if(i == 0){
            artyom.say("Estoy en la tercera alcoba");            
            Persona.style.left = "980px";
            Persona.style.top = "270px";
            /*let cont = 10;
            setInterval(function(){
                cont ++;
                if(cont != 47){
                    Persona.style.left = cont +"%";

                }
                Persona.style.top = "25%";
            }, 600)            */
        }
        else if(i == 1){
            artyom.say("Luz apagada");
            document.querySelector(".Alcoba3").style.opacity = "0%";
            Persona.style.left = "45%";
            Persona.style.top = "25%";
        }
    }
})
const sala = "10%";
var Persona = document.querySelector(".persona");

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
