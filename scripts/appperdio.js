let audio = document.createElement("AUDIO")
audio.src= 'musica/error.ogg';
audio.muted=true;
audio.play();

 onload=function()
    {
    	audio.muted=false;
        audio.play();
    }