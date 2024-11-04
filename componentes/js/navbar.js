const header = document.querySelector(".header");

header.innerHTML = `<nav class= "navbar navbar-expand-lg fixed-top p-4"> 
 <div class="container-fluid">
   <h4> <a href="#">Temporizador 🕑</a></h4>
   <button
     class="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#menu"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
   >
     <span class="navbar-toggler-icon"></span>
   </button>

   <div class="collapse navbar-collapse" id="menu">
     <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
       <li class="nav-item jost">
         <a class="nav-link font" aria-current="page" href="/index.html"
           >Inicio</a
         >
       </li>

       <li class="nav-item jost">
         <a class="nav-link" href="/componentes/pages/404.html">Contacto</a>
       </li>

       <li class="nav-item jost">
         <a class="nav-link" href="/componentes/pages/nosotros.html"
           >Sobre nosotros</a
         >
      </li>
    </ul>
  </div>
 </div>
 </nav> `;
