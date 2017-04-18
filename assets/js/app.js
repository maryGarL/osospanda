var contenedor=document.getElementById("contenedor");
var restaurar=document.getElementById("mostrar");
var mostrar=document.getElementById("etiqueta1");
var borrar=document.getElementById("etiqueta2");
for (var i = 0; i <= 3; i++) {
var div=document.createElement("div");
var image=document.createElement("img");
var span=document.createElement("span");
div.setAttribute("class","caja-foto");
span.setAttribute("onclick","document.getElementsByClassName('caja-foto')"+"["+i+"]"+".style.display ='none'")
image.setAttribute("src","assets/images/panda"+i+".jpg");
span.innerHTML="&times;";
div.appendChild(image);
div.appendChild(span);
contenedor.appendChild(div);
}

restaurar.setAttribute("onclick","onClick()")
function onClick() {
  for (var i = 0; i <= 3; i++){
    document.getElementsByClassName('caja-foto')[i].style.display ='inline-block';
  }
  }

borrar.setAttribute("onclick","quitar()")
function quitar() {
    document.getElementById('mostrarTexto').style.display ='none';

  }

  mostrar.setAttribute("onclick","mostrar1()")
  function mostrar1() {
      document.getElementById('mostrarTexto').style.display ='inline-block';

    }
