const caso1= document.querySelector("#caso-1");
const caso2= document.querySelector("#caso-2");
const titulo= document.querySelector("#titulo");
const estrella1= document.querySelector("#estrella-1");
const estrella2= document.querySelector("#estrella-2");
const estrella3= document.querySelector("#estrella-3");
const gatito = document.querySelector("#gato");
var sonido = 1;
var contador=1;
var resultado=0;
let audioerror = document.createElement("AUDIO");
audioerror.src= 'musica/incorrecto.mp3';
let audiogana = document.createElement("AUDIO");
audiogana.src= 'musica/gana.wav';

document.getElementById("uno").style.backgroundColor="#FFD022";

function limpiar(id){
	var juego = document.getElementById(id);
	 while(juego.firstChild) {
		juego.removeChild(juego.firstChild); 
		}
   }

function imprimir_perder(){
	var container = document.getElementById('juego');
	container.innerHTML = '<div class="perdio" style="background-color: white; width: 80%; text-align: center; height: 35%;"><strong class="titulo-p">!Oh no!, has perdido</strong><img style="width: 20%; padding-top: 10px;" src="img/perdio-gato.gif"></div><div class="botones"><a class="new" id="Triángulo" href="Juego.html">Nuevo juego</a><a href="index.html" class="home" id="Cuadrado">Inicio</a></div>';
}

function imprimir_ganar(){
var container = document.getElementById('juego');
container.innerHTML ='<div class="perdio" style="background-color: white; width: 80%; text-align: center; height: 35%;"><p class="titulo-p">¡Felicidades!, has terminado</p><img style="width: 13%; padding-top: 10px;" src="img//ganogato.gif"></div><a style="display:block; text-align:center;" href="index.html"><img style="width:5%; margin-top:5%;" src="img/home.png"></img></a>';
}

function Nicolas(intsonido){
	let etiquetaAudio = document.createElement("AUDIO")
	switch(intsonido){
		case 1:
			etiquetaAudio.src= "musica/avion.mp4"
    		etiquetaAudio.play()
			break;
		case 2:
			etiquetaAudio.src= "musica/globo.mp4"
    		etiquetaAudio.play()
			break;
		case 3:
			etiquetaAudio.src= "musica/animal.mp4"
    		etiquetaAudio.play()
			break;
		case 4:
			etiquetaAudio.src= "musica/gallina.mp4"
    		etiquetaAudio.play()
			break;
	}
    
}

function AMLO (abrazos){
	switch(abrazos){
		case 1:
			estrella3.src="img/sinpunto.png";
			audioerror.play();
			break;
		case 2:
			estrella2.src="img/sinpunto.png";
			audioerror.play();
			break;
		case 3:
			let etiquetaAudio = document.createElement("AUDIO")
            etiquetaAudio.src= "musica/error.ogg"
            etiquetaAudio.play()
			estrella1.src="img/sinpunto.png";
			limpiar("juego");
			imprimir_perder();
			break;

	}
}

caso1.addEventListener("click", function() {
	switch(contador)
	{
	case 1:resultado++;
			AMLO(resultado);
			break;
	case 2:caso1.src="img/zorroDebajoArbol.jpg";
		   caso2.src="img/arbolArribaX.jpg";
		   document.getElementById("tres").style.backgroundColor="#FFD022";
		   titulo.innerHTML="Selecciona el animal que está debajo del árbol";
		   contador++;
		   sonido++;
		   audiogana.play();
		   break;

	case 3:caso1.src="img/gallinaX.png";
			caso2.src="img/gallinaEncimaDe.png";
			titulo.innerHTML="Selecciona la gallina que está encima del granero";
		   document.getElementById("cuatro").style.backgroundColor="#FFD022";
		   contador++;
		   sonido++;
		   audiogana.play();
		   break;

	case 4:
		resultado++;
		AMLO(resultado);
	break;
	}
});

caso2.addEventListener("click", function() {
 	switch(contador)
	{
	case 1:
		document.getElementById("dos").style.backgroundColor="#FFD022";
		caso1.src="img/globoAbajo2.jpg";
		caso2.src="img/globoArribaX.jpg";
		titulo.innerHTML="Selecciona el globo aerostático que está hacia abajo";
		contador++;
		sonido++;
		audiogana.play();
		break;

	case 2:resultado++;
			AMLO(resultado);
			break;
	case 3:resultado++;
			AMLO(resultado);
			break;
	case 4:
		let etiquetaAudio = document.createElement("AUDIO")
		etiquetaAudio.src= "musica/mientras.mp3"
		etiquetaAudio.play()

		document.getElementById("cicno").style.backgroundColor="#FFD022";
		audiogana.play();
		limpiar("juego");
		imprimir_ganar();
		   break;
	}
});

gatito.addEventListener("click", function(){
	Nicolas(sonido);
})
