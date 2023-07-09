function navbar() {
  return (
    <div>
      <nav
        class="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary border-bottom-dark"
        data-bs-theme="dark"
      >
        <div class="container-fluid">
          <a class="navbar-brand" href=".">
            Alezzia
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href=".">
                  Eventos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href=".">
                  Invitaciones
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href=".">
                  Paquetes
                </a>
              </li>
              {/* <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="."
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href=".">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href=".">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href=".">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* Este es un dropdown que guarda mas opciones, se activara cuando sea necesaria */}
            </ul>

            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button class="boton btn btn-outline-light" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
            {/* Esta seccion es de un buscador, se reactivara solo cuando sea necesaria */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
