const botonUno = document.querySelector(".uno");
const botonDos = document.querySelector(".dos");
const botonTres = document.querySelector(".tres");
const botonCuatro = document.querySelector(".cuatro");

const ocultar = () => {
  botonUno.style.display = "none";

  botonDos.style.display = "block";
  document.querySelector(".hoja").style.display = "none";
};

const mostrar = (e) => {
  botonDos.style.display = "none";

  botonUno.style.display = "block";
  document.querySelector(".hoja").style.display = "";
};

const ocultarD = () => {
  botonTres.style.display = "none";

  botonCuatro.style.display = "block";
  document.querySelector(".hoja1").style.display = "none";
};

const mostrarD = () => {
  botonCuatro.style.display = "none";

  botonTres.style.display = "block";
  document.querySelector(".hoja1").style.display = "";
};

botonUno.addEventListener("click", ocultar);
botonDos.addEventListener("click", mostrar);

botonTres.addEventListener("click", ocultarD);
botonCuatro.addEventListener("click", mostrarD);
