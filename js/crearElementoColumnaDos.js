// PARRAFO

const parra = document.getElementById('parrafo');

const p = document.createElement('p')
p.classList.add('parrafo-perfil')
p.textContent = ` Programador web con mas de 5 años de trayectoria desarrolladas en el eCommerce. 
A lo largo de estos años, he tenido el privilegio de formar parte en la creación 
de webs como greekletics.es y peternappi.es, las cuales han cultivado un gran éxito, 
tanto en tráfico como en conversiones. Busco formar parte de un proyecto para 
llevar mi capacidad creativa al siguiente nivel, aportando mis amplios conocimientos 
en CSS y HTML.  `

parra.appendChild(p)

// Listas

const lista1 = document.querySelector('#lista1');
const lista2 = document.querySelector('#lista2');
const lista3 = document.querySelector('#lista3');
const lista4 = document.querySelector('#lista4');
const lista6 = document.querySelector('#lista6');
const lista7 = document.querySelector('#lista7');
const lista8 = document.querySelector('#lista8');


function ul1() {
    
    let elementsUL = [
        "Maquetación mediante CSS.",
        "Optimización de SEO on page.",
        "Programación con JavaScript.",
        "Diseño, desarrollo e implementación de interfaces de BBDD."
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('desa-web')
    
    lista1.appendChild(ul);
}

function ul2() {
    
    let elementsUL = [
        "Incremento en un 30% de media en el tráfico de nuestros clientes.",
        "Nominación en los premios Sodeint por mejor diseño web."
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('desa-web')
    
    lista2.appendChild(ul);
}

function ul3() {
    
    let elementsUL = [
        "Elaboración de requisitos funcionales y documentos de especificaciones técnicas.",
        "Desarrollo de aplicaciones web basadas en tecnologías de SharePoint y Framework.",
        "Creación de componentes para transferir datos seguros entre webs y sistemas internos.",
        "Elaboración de diseños gráficos con Adobe Photoshop e Ilustrator"
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('desa-web')
    
    lista3.appendChild(ul);
}

function ul4() {
    
    let elementsUL = [
        "Diseño de soluciones SharePoint e intranets corporativas para más de 10 empresas en expansión"
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('lista-ul')
    
    lista4.appendChild(ul);
}

function ul6() {
    
    let elementsUL = [
        "Programación Avanzada en JavaScript (200 horas) - Edx.",
        "Adobe Ilustrator para diseño gráfico (140 horas) - Domestika."
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('ul-cur')
    
    lista6.appendChild(ul);
}

function ul7() {
    
    let elementsUL = [
        "Inglés C1",
        "Francés B2"
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('ul-idi')
    
    lista7.appendChild(ul);
}

function ul8() {
    
    let elementsUL = [
        " Programación con JavaScript, CSS, HTML, C#, SQL.",
        "Conocimientos avanzados de Prestashop.",
        "Manejo de MySQL, MariaDB y Mongodb.",
        "Desarrollo de aplicaciones móviles.",
        "Maquetación CSS."
    ]
    let ul = createUL(elementsUL);
    ul.classList.add('ul-hab')
    
    lista8.appendChild(ul);
}

function createUL(elements) {
    let ul = document.createElement("ul");
 
    if (elements && Array.isArray(elements)) {
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            let li = document.createElement("li");
            let liText = document.createTextNode(element);
            li.appendChild(liText);
            ul.appendChild(li);
        }
    }
 
    return ul;
}

ul1()
ul2()
ul3()
ul4()
ul6()
ul7()
ul8()