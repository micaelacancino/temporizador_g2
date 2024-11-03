function navbar() {
  const header = document.getElementById("header");
  const nav = document.createElement("nav");
  nav.classList.add("navbar navbar-expand-lg");
  nav.innerHTML = `<div class="container-fluid">
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
        <a class="nav-link" href="#footer">Contacto</a>
      </li>

      <li class="nav-item jost">
        <a class="nav-link" href="/componentes/pages/nosotros.html"
          >Sobre nosotros</a
        >
      </li>
    </ul>
  </div>
</div>`;

  header[0].appendChild(nav);
}

export { navbar };
