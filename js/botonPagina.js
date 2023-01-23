const botonUno = document.querySelector(".uno");
const botonDos = document.querySelector(".dos");

const myTec = document.getElementById("tec");

const ocultar = () => {
  botonUno.style.display = "none";

  botonDos.style.display = "block";
  document.querySelector(".hoja").style.display = "none";

  myTec.disabled = true;
  myTec.style.textDecoration = "line-through";
};

const mostrar = (e) => {
  botonDos.style.display = "none";

  botonUno.style.display = "block";
  document.querySelector(".hoja").style.display = "";

  myTec.disabled = false;
  myTec.style.textDecoration = "none";
};

botonUno.addEventListener("click", ocultar);
botonDos.addEventListener("click", mostrar);
