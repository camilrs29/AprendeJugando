//variables
const  nivel1 = document.querySelector("#parte_1");
const  nivel2 = document.querySelector("#parte_2");
const  nivel3 = document.querySelector("#parte_3");
const  nivel4 = document.querySelector("#parte_4");
const  nivel5 = document.querySelector("#parte_5");
const btn1 = document.querySelector("#btn-1")
const btn2 = document.querySelector("#btn-2")
const btn3 = document.querySelector("#btn-3")
let num = Math.random() 
let no_nivel = 1;
let estrella = 3;

//funcion para el numero aleatorio
function btnrandom(min, max) {
    let num = Math.random() * (max - min) + min;
    num = Math.round(num);
   
    return num;
  }

  function asig_btn (numCorrecto){
        num=btnrandom(1,3)
        switch(num){
            case 1:
                btn1.textContent = numCorrecto
                break;
            case 2:
                btn2.textContent = numCorrecto 
                break;
            case 3:
                btn3.textContent = numCorrecto
                break;
        }
   }

   function crear_img (){
        const imgn = document.createElement('IMG')
        imgn.src = "img/banana.png";
        imgn.classList.add("banana");
        return imgn;
   }

   function añ_img_der(){
        const img = crear_img();
        const juego = document.querySelector("#derecha");
        juego.appendChild(img);
   }
   function añ_img_iz(){
        const img = crear_img();
        const juego = document.querySelector("#izquierda");
        juego.appendChild(img);
    }

    
   function limpiar(id){
    var juego = document.getElementById(id);
     while(juego.firstChild) {
        juego.removeChild(juego.firstChild); 
        }

   }

   function reproducir () {
    let etiquetaAudio = document.createElement("AUDIO")
    etiquetaAudio.src= "musica/gana.wav"
    etiquetaAudio.play()
   }

   function perder(estrella){
       const cadena = estrella
       const cadena2 = "#";
       const result = cadena2 + cadena;
       const star = document.querySelector(result);

       star.src = "img/sinpunto.png";
   }

   function perdio (){
        const msg = document.createElement('P')
        const imgn = document.createElement('IMG')
        const juego = document.querySelector("#bananitas");
        const pie = document.querySelector("#respuestas");
        const es_pan1 = document.createElement("SPAN")
        const es_pan2 = document.createElement("SPAN")
        const nuevo = document.createElement("A")
        const casa = document.createElement("A")


        msg.textContent = "¡Oh no!, has perdido";
        msg.classList.add("txt");
        imgn.src = "img/perdio.gif";
        imgn.classList.add("banana");
        imgn.classList.add("mg-left");
        juego.classList.add("jtfy-center")
        juego.classList.add("dis-block")
        juego.appendChild(msg)
        juego.appendChild(imgn)

        nuevo.textContent = "Nuevo juego";
        nuevo.classList.add("btn")
        nuevo.href = "suma.html"
        casa.textContent = "Inicio"
        casa.classList.add("btn")
        casa.href = "index.html"

        pie.appendChild(es_pan1)
        pie.appendChild(nuevo)
        pie.appendChild(casa)
        pie.appendChild(es_pan2)
        
   }

   function gano(){
    const msg = document.createElement('P')
    const imgn = document.createElement('IMG')
    const casa = document.createElement('IMG')
    const juego = document.querySelector("#bananitas");
    const enlace_inicio = document.createElement('A')
    const contendor = document.createElement('DIV')
    const pie = document.querySelector("#respuestas");

    let etiquetaAudio = document.createElement("AUDIO")
    etiquetaAudio.src= "musica/mientras.mp3"
    etiquetaAudio.play()

    pie.style="display:flex;justify-content:center;"
    contendor.style = "display: flex;justify-content: center;"
    msg.textContent = "¡Felicidades!, has terminado"
    msg.classList.add("txt")
    imgn.src = "img/gano.gif";
    casa.src = "img/home.png";
    casa.classList.add("banana");
    imgn.classList.add("banana");
    imgn.classList.add("mg-left");
    juego.classList.add("jtfy-center")
    juego.classList.add("dis-block")
    enlace_inicio.href = "index.html"
    enlace_inicio.classList.add("txt-decor")
    enlace_inicio.classList.add("txt-center")
    enlace_inicio.appendChild(casa)
    contendor.appendChild(enlace_inicio)
    juego.appendChild(msg)
    juego.appendChild(imgn)
    pie.appendChild(contendor);
   
}


   function evaluar (numCorrecto, boton){
        if(boton.textContent === numCorrecto){
            console.log("si entro")
            reproducir();
            switch(numCorrecto){
                case '2':
                    nivel2.classList.add("colorear");
                    añ_img_der();
                    btn1.textContent = "2"
                    btn2.textContent = "1"
                    btn3.textContent = "4"
                    asig_btn(3);
                    no_nivel++;
                    console.log("aqui tambien xd")
                    break;
                case '3':
                    nivel3.classList.add("colorear");
                    añ_img_der();
                    añ_img_iz();
                    btn1.textContent = "3"
                    btn2.textContent = "4"
                    btn3.textContent = "6"
                    asig_btn(5);
                    no_nivel++;
                    break;
                case '5':
                    nivel4.classList.add("colorear");
                    añ_img_iz();
                    añ_img_iz();
                    añ_img_der();
                    btn1.textContent = "6"
                    btn2.textContent = "7"
                    btn3.textContent = "5"
                    asig_btn(8);
                    no_nivel++;
                    break;
                case '8':
                    nivel5.classList.add("colorear");
                    limpiar("bananitas");
                    limpiar("respuestas");
        
                    gano();
                    break;
            }
        }else{
            if(estrella === 1){
                const sinEst = "star_" + estrella;
                perder(sinEst);
                let etiquetaAudio = document.createElement("AUDIO")
                etiquetaAudio.src= "musica/error.ogg"
                etiquetaAudio.play()
                limpiar("bananitas");
                limpiar("respuestas");
                perdio();

            }else{
                let etiquetaAudio = document.createElement("AUDIO")
                etiquetaAudio.src= "musica/incorrecto.mp3"
                etiquetaAudio.play()
                const sinEst = "star_" + estrella;
                perder(sinEst);
                estrella--;
            }
        }
   }

   nivel1.classList.add("colorear");
   asig_btn(2);


btn1.addEventListener("click", function(){
    console.log("presionaste el boton 1")
    switch(no_nivel)
    {
        case 1:
            console.log("hola")
            evaluar("2", btn1);
            
            break;
        case 2:
            evaluar("3", btn1);
            break;
        case 3:
            evaluar("5", btn1);
            break;
        case 4:
            evaluar("8", btn1);
            break;
    }
   });

   btn2.addEventListener("click", function(){
    console.log("presionaste el boton 2")
    switch(no_nivel)
    {
        case 1:
            console.log("hola")
            evaluar("2", btn2);
            break;
        case 2:
            evaluar("3", btn2);
            break;
        case 3:
            evaluar("5", btn2);
            break;
        case 4:
            evaluar("8", btn2);
            break;
    }
   });

   btn3.addEventListener("click", function(){
    console.log("presionaste el boton 3")
    switch(no_nivel)
    {
        case 1:
            console.log("hola")
            evaluar("2", btn3);
            break;
        case 2:
            evaluar("3", btn3);
            break;
        case 3:
            evaluar("5", btn3);
            break;
        case 4:
            evaluar("8", btn3);
            break;
    }
   });

   const troll = document.querySelector("body")
   troll.addEventListener("keypress", function(){
        let etiquetaAudio = document.createElement("AUDIO")
        etiquetaAudio.src= "musica/rolita.mp3"
        etiquetaAudio.play()
        const chango = document.createElement("IMG")
        chango.classList.add("troll")
        chango.src= "img/vaca.gif"
        troll.appendChild(chango)
   });