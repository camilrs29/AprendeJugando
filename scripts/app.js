const btn1 = document.querySelector("#Triángulo");
const btn2 = document.querySelector("#Cuadrado");
const btn3 = document.querySelector("#Rectángulo");
const btn4 = document.querySelector("#Círculo");

 var imagenes=new Array(
        ['img/circulo-1.jpg'],
        ['img/cuadrado-1.png'],
        ['img/triangulo-1.png'],
        ['img/rectangulo-1.jpg']
    );
    var contador=0;
    var aux=0;
    document.getElementById("uno").style.backgroundColor="#FFD022";
 
    /**./
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // cambiamos la imagen y la url
        document.getElementById("imagen").src=imagenes[contador%imagenes.length];
        contador++
    }

    function pasar_lvl(contador){
        let audio = document.createElement("AUDIO")
        audio.src= 'musica/gana.wav';
        audio.play();
        rotarImagenes();
        switch(contador){
            case 1:
                document.getElementById("dos").style.backgroundColor="#FFD022";
                break;
            case 2:
                document.getElementById("tres").style.backgroundColor="#FFD022";
                break;
            case 3:
                document.getElementById("cuatro").style.backgroundColor="#FFD022";
                break;
            case 4:
                document.getElementById("cinco").style.backgroundColor="#FFD022";
                break;
        }
    }

    function limpiar(id){
        var juego = document.getElementById(id);
         while(juego.firstChild) {
            juego.removeChild(juego.firstChild); 
            }
       }

       function imprimir_perder(){
            var container = document.getElementById('juego');
            container.innerHTML = '<div class="perdio" style="background-color: white; width: 80%; text-align: center; height: 35%;"><strong class="titulo-p">¡Oh no!, has perdido</strong><img style="width: 20%; padding-top: 10px;" src="img//2.gif"></div><div class="botones"><a class="new" id="Triángulo" href="Figuras.html">Nuevo juego</a><a href="index.html" class="home" id="Cuadrado">Inicio</a></div>';
       }

       function imprimir_ganar(){
        var container = document.getElementById('juego');
        container.innerHTML ='<div class="perdio" style="background-color: white; width: 80%; text-align: center; height: 35%;"><p class="titulo-p">¡Felicidades!, has terminado</p><img style="width: 13%; padding-top: 10px;" src="img//ganooso.gif"></div><a style="display:block; text-align:center;" href="index.html"><img style="width:5%; margin-top:5%;" src="img/home.png"></img></a>';
       }

    function vida(){
        aux++;
        if(aux==1)
        {
            let audio = document.createElement("AUDIO")
            audio.src= 'musica/incorrecto.mp3';
            audio.play();
            var star3=document.getElementById("star-3");
            star3.src="img//sinpunto.png";
        }
        if(aux==2)
        {
            let audio = document.createElement("AUDIO")
            audio.src= 'musica/incorrecto.mp3';
            audio.play();
            var star2=document.getElementById("star-2");
            star2.src="img//sinpunto.png";
        }            
        if(aux==3)
        { 
            let audio = document.createElement("AUDIO")
            audio.src= 'musica/error.ogg';
            audio.play();
            var star1=document.getElementById("star-1");
            star1.src="img//sinpunto.png";
            limpiar("juego");
            imprimir_perder();
        }
    }

    
 
    /**
     * Función que se ejecuta una vez cargada la página
     */
    btn1.addEventListener("click", function()
        { 
            if(contador==3)
            {
                pasar_lvl(contador);
            }else
            {
            if(contador==1)
                {   
                    vida();
                }
                if(contador==2)
                 {
                    vida();
                 }
                 if(contador==3)
                 {
                    vida();
                 }
                  if(contador==4)
                 {
                    vida();
                 }
             }   
            
        });
    btn2.addEventListener("click", function()
        { 

                if(contador==2){
                    pasar_lvl(contador);
                }else
                {
                      if(contador==1)
                {
                    vida();
                }
                if(contador==3)
                 {
                    vida();
                }
                 if(contador==4)
                 {
                    vida();
                 }
            }
 
        });
    btn3.addEventListener("click", function()
        { 
            if(contador==4)
            {
                let etiquetaAudio = document.createElement("AUDIO")
                etiquetaAudio.src= "musica/mientras.mp3"
                etiquetaAudio.play()

                pasar_lvl(contador);
                limpiar("juego");
                imprimir_ganar();
            }
            if(contador==1)
                {
                    vida();
                }
               if(contador==2)
                 {
                    vida();
                 }
                 if(contador==3)
                 {
                    vida();
                 }

        });
    btn4.addEventListener("click", function()
        { 
            if(contador==1)
            {
                pasar_lvl(contador);
            }else
            {
                 if(contador==2)
                 {
                    vida();
                }
                if(contador==3)
                 {
                    vida();
                 }
                  if(contador==4)
                 {
                    vida();
                 }
            }
            

        });
    onload=function()
    {
        rotarImagenes();
        // Cargamos una imagen aleatoria
        
        // Indicamos que cada 5 segundos cambie la imagen
    }