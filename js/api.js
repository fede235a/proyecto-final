
// BOTON
const boton = document.getElementById("tec");

// FETCH RANDOM USE API
const fetchDatos = async () => {
  try {
    const url = "https://randomuser.me/api/";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    // console.log(datos);

    foto.src = datos.picture.large;
    nom.textContent = datos.name.first + " " + datos.name.last;
    fecha.textContent = datos.dob.date;
    calle.textContent = datos.location.street.name;
    numero.textContent = datos.location.street.number;
    nat.textContent = datos.location.country;
    estado.textContent = datos.location.state;
    ciudad.textContent = datos.location.city;
    postal.textContent = datos.location.postcode;
    cel.textContent = datos.cell;
    mail.textContent = datos.email;
    liked.textContent = datos.login.username;
  } catch (error) {
    console.log(error);
  }
};

// PRIMERA COLUMNA

// CAMBIO DE FOTO
const foto = document.getElementById("foto");

// CAMBIO DE NOMBRE
const nom = document.getElementById("nombre");

// CAMBIO DE FECHA DE NACIMIENTO
const fecha = document.getElementById("fecha-nac");

// CAMBIO DE DIRECCION
const calle = document.getElementById("calle");
const numero = document.getElementById("numero");

// CAMBIAR NACIONALIDAD
const nat = document.getElementById("nat");
const estado = document.getElementById("estado");
const ciudad = document.getElementById("ciudad");
const postal = document.getElementById("postal");

// CAMBIAR CELULAR, MAIL
const cel = document.getElementById("cel");
const mail = document.getElementById("mail");
const liked = document.getElementById("liked");


// SEGUNDA COLUMNA

// CAMBIAR PERFIL PROFESIONAL
function cambiarParrafo() {

  const parrafos = [
    "Programador web con mas de 5 años de trayectoria desarrolladas en el eCommerce. A lo largo de estos años, he tenido el privilegio de formar parte en la creación de webs comogreekletics.es y peternappi.es, las cuales han cultivado un gran éxito, tanto en tráfico como en conversiones. Busco formar parte de un proyecto para llevar mi capacidad creativa al siguiente nivel, aportando mis amplios conocimientos en SQL.",
    "Programador web con mas de 10 años de trayectoria desarrolladas en el Sigma Studios. A lo largo de estos años, he tenido el privilegio de formar parte en la creación de webs comogreekletics.ar y peternappi.ar, las cuales han cultivado un gran éxito, tanto en tráfico como en conversiones. Busco formar parte de un proyecto para llevar mi capacidad creativa al siguiente nivel, aportando mis amplios conocimientos en JavaScript.",
    "Programador web con mas de 6 años de trayectoria desarrolladas en el Coco Solution. A lo largo de estos años, he tenido el privilegio de formar parte en la creación de webs comogreekletics.cl y peternappi.cl, las cuales han cultivado un gran éxito, tanto en tráfico como en conversiones. Busco formar parte de un proyecto para llevar mi capacidad creativa al siguiente nivel, aportando mis amplios conocimientos en Bootstrap.",
    "Programador web con mas de 3 años de trayectoria desarrolladas en el Drubbit. A lo largo de estos años, he tenido el privilegio de formar parte en la creación de webs comogreekletics.br y peternappi.br, las cuales han cultivado un gran éxito, tanto en tráfico como en conversiones. Busco formar parte de un proyecto para llevar mi capacidad creativa al siguiente nivel, aportando mis amplios conocimientos en Sass y Less.",

  ];

  const parrafo = document.getElementById("parrafo");

  for (let i = 0; i < 1; i++) {
    let aleatorio = Math.floor(Math.random() * parrafos.length);

    let spliceEle = parrafos.splice(aleatorio, 1);

    if (i == 0) {
      parrafo.textContent = spliceEle;
    }
  }
}  

// CAMBIAR EXPECIENCIA LABORAL
function cambiarExp() {
  const experiencia = [
    "Conocimientos avanzados de Prestashop.",
    "Optimización de SEO on page.",
    "Desarrollo de aplicaciones móviles.",
    "Maquetación CSS.",
    "Maquetador en Sass y Less.",
    "Programación con JavaScript.",
    "Responsive web design & Bootstrap.",
    "Diseño, desarrollo e implementación de interfaces de BBDD.",
    "Git: Desarrollo colaborativo.",
    "UML y UP: Analisis y diseño orientado a objetos.",
  ];

  const expLaboral1 = document.getElementById("expLaboral1");
  const expLaboral2 = document.getElementById("expLaboral2");
  const expLaboral3 = document.getElementById("expLaboral3");
  const expLaboral4 = document.getElementById("expLaboral4");

  for (let i = 0; i < 4; i++) {
    let aleatorio = Math.floor(Math.random() * experiencia.length);

    let spliceEle = experiencia.splice(aleatorio, 1);

    if (i == 0) {
      expLaboral1.textContent = spliceEle;
    }
    if (i == 1) {
      expLaboral2.textContent = spliceEle;
    }
    if (i == 2) {
      expLaboral3.textContent = spliceEle;
    }
    if (i == 3) {
      expLaboral4.textContent = spliceEle;
    }
  }
}

// CAMBIAR LOGRO CLAVE
function cambiarLogroUno() {
  const logrosUno = [
    "Incremento en un 30% de media en el tráfico de nuestros clientes.",
    "Nominación en los premios Sodeint por mejor diseño web.",
    "Diseño de soluciones SharePoint e intranets corporativas para más de 10 empresas en expansión.",
    "Diseño de soluciones con CSS, HTML"
  ];

  const logro = document.getElementById("logro");
  const logro1 = document.getElementById("logro1");

  for (let i = 0; i < 2; i++) {
    let aleatorio = Math.floor(Math.random() * logrosUno.length);

    let spliceEle = logrosUno.splice(aleatorio, 1);

    if (i == 0) {
      logro.textContent = spliceEle;
    }
    if (i == 1) {
      logro1.textContent = spliceEle;
    }
  }
}

// CAMBIAR DESARROLLADOR
function cambiarDesa() {
  const desarrollador = [
    "Elaboración de requisitos funcionales y documentos de especificaciones técnicas.",
    "Desarrollo de aplicaciones web basadas en tecnologías de SharePoint y Framework.",
    "Creación de componentes para transferir datos seguros entre webs y sistemas internos.",
    "Elaboración de diseños gráficos con Adobe Photoshop e Ilustrator",
    "Desarrollo de aplicaciones web basadas con JavaScript.",
    "Responsive web design & Bootstrap.",
    "Diseño, desarrollo e implementación de interfaces de BBDD.",
    "Diseño con UML y UP"
  ];

  const desa1 = document.getElementById("desa1");
  const desa2 = document.getElementById("desa2");
  const desa3 = document.getElementById("desa3");
  const desa4 = document.getElementById("desa4");

  for (let i = 0; i < 4; i++) {
    let aleatorio = Math.floor(Math.random() * desarrollador.length);

    let spliceEle = desarrollador.splice(aleatorio, 1);

    if (i == 0) {
      desa1.textContent = spliceEle;
    }
    if (i == 1) {
      desa2.textContent = spliceEle;
    }
    if (i == 2) {
      desa3.textContent = spliceEle;
    }
    if (i == 3) {
      desa4.textContent = spliceEle;
    }
  }
}

// CAMBIAR LOGRO CLAVE DOS
function cambiarLogroDos() {
  const logrosDos = [
    "Incremento en un 30% de media en el tráfico de nuestros clientes.",
    "Nominación en los premios Sodeint por mejor diseño web.",
    "Diseño de soluciones SharePoint e intranets corporativas para más de 10 empresas en expansión.",
    "Diseño de soluciones con CSS, HTML"
  ];

  const logro2 = document.getElementById("logro2");

  for (let i = 0; i < 1; i++) {
    let aleatorio = Math.floor(Math.random() * logrosDos.length);

    let spliceEle = logrosDos.splice(aleatorio, 1);

    if (i == 0) {
      logro2.textContent = spliceEle;
    }
  }
}

// CARBIAR CURSOS
function cambiarCursos() {
  const cursos = [
    "Programación Avanzada en JavaScript (200 horas) - Edx.",
    "CSS, HTML y SQL (150 horas).",
    "Manejo de MySQL, MariaDB y Mongodb (180 horas).",
    "Desarrollo de aplicaciones móviles (200 horas).",
    "Adobe Ilustrator para diseño gráfico (140 horas) - Domestika.",
    "Maquetador en Sass y Less (100 horas).",
    "NodeJs (150 horas).",
    "Responsive web design & Bootstrap (60 horas).",
    "ReacJs Developer (140 horas).",
    "Git: Desarrollo colaborativo (40 horas).",
    "UML y UP: Analisis y diseño orientado a objetos (80 horas).",
  ];

  const curso = document.getElementById("curso");
  const curso1 = document.getElementById("curso1");

  for (let i = 0; i < 2; i++) {
    let aleatorio = Math.floor(Math.random() * cursos.length);

    let spliceEle = cursos.splice(aleatorio, 1);

    if (i == 0) {
      curso.textContent = spliceEle;
    }
    if (i == 1) {
      curso1.textContent = spliceEle;
    }
  }
}

// CAMBIAR IDIOMAS
function cambiarIdiomas() {
  const idiomas = [
    "Ingles",
    "Portugues",
    "Español",
    "Chino",
    "Ruso",
    "Frances",
    "Aleman",
    "Polaco",
    "Turco",
    "Japones",
    "Italiano",
  ];

  const idioma = document.getElementById("idioma");
  const idioma1 = document.getElementById("idioma1");

  for (let i = 0; i < 2; i++) {
    let aleatorio = Math.floor(Math.random() * idiomas.length);

    let spliceEle = idiomas.splice(aleatorio, 1);

    if (i == 0) {
      idioma.textContent = spliceEle;
    }
    if (i == 1) {
      idioma1.textContent = spliceEle;
    }
  }
}

// CAMBIAR HABILIDADES
function cambiarHab() {
  const habilidades = [
    "Conocimientos avanzados de Prestashop.",
    "Programación con JavaScript, CSS, HTML, C#, SQL.",
    "Manejo de MySQL, MariaDB y Mongodb.",
    "Desarrollo de aplicaciones móviles.",
    "Maquetación CSS.",
    "Maquetador en Sass y Less.",
    "NodeJs.",
    "Responsive web design & Bootstrap.",
    "ReacJs Developer.",
    "Git: Desarrollo colaborativo.",
    "UML y UP: Analisis y diseño orientado a objetos.",
  ];

  const hab1 = document.getElementById("hab1");
  const hab2 = document.getElementById("hab2");
  const hab3 = document.getElementById("hab3");
  const hab4 = document.getElementById("hab4");
  const hab5 = document.getElementById("hab5");

  for (let i = 0; i < 5; i++) {
    let aleatorio = Math.floor(Math.random() * habilidades.length);

    let spliceEle = habilidades.splice(aleatorio, 1);

    if (i == 0) {
      hab1.textContent = spliceEle;
    }
    if (i == 1) {
      hab2.textContent = spliceEle;
    }
    if (i == 2) {
      hab3.textContent = spliceEle;
    }
    if (i == 3) {
      hab4.textContent = spliceEle;
    }
    if (i == 4) {
      hab5.textContent = spliceEle;
    }
  }
}

boton.addEventListener("click", fetchDatos);

boton.addEventListener('click', cambiarParrafo)
boton.addEventListener("click", cambiarExp);
boton.addEventListener("click", cambiarLogroUno);
boton.addEventListener("click", cambiarDesa);
boton.addEventListener("click", cambiarLogroUno);
boton.addEventListener("click", cambiarCursos);
boton.addEventListener("click", cambiarIdiomas);
boton.addEventListener("click", cambiarHab);

document.addEventListener("DOMContentLoaded", fetchDatos);
