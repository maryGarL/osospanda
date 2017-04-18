var contenedor=document.getElementById("contenedor");

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
