
// Header Index

const header = document.getElementById('header');

const nav = document.createElement('nav');
nav.innerHTML = `
                    <nav class="nav">
                        <a href="#cajap" class="logo">CV</a>
                        <div class="linea-menu">
                                <span class="linea1"></span>
                                <span class="linea2"></span>
                                <span class="linea3"></span>
                        </div>
                                               
                        <ul class="nav-menu">
                            <li class="nav-menu-li">
                                <a href="#cajap" class="nav-menu-link nav-link">CV Estático</a>
                            </li>
                            <li class="nav-menu-li">
                                <a href="pagina.html" class="nav-menu-link nav-link">CV Dinámico</a>
                            </li>
                            <li class="nav-menu-li">
                                <a href="#cajas" class="nav-menu-link nav-link nav-menu-link_active">Explicación</a>
                            </li>
                        </ul>
                    </nav>
                `
          
header.appendChild(nav)


