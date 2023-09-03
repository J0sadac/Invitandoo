import { Link } from "react-router-dom";

function navbar() {
  return (
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light"
      >
        <div className="container nav-cont">
          <Link className="navbar-brand nav-home" to="/">
            Invitandoo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse m-auto navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active nav-section" aria-current="page" to="/">
                  Eventos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active nav-section" to="/invitaciones">
                  Invitaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active nav-section" to="/">
                  Paquetes
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="."
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to=".">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to=".">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to=".">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
              {/* Este es un dropdown que guarda mas opciones, se activara cuando sea necesaria */}
            </ul>

            <button type="button" className="btn btn-outline-dark">
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="16" height="16" fill="currentColor" 
              className="bi bi-soundwave" viewBox="0 0 16 16">

                {/* <path fill-rule="evenodd" 
                d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/> */}

              </svg>
            </button>
            

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="boton btn btn-outline-light" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form> */}
            {/* Esta seccion es de un buscador, se reactivara solo cuando sea necesaria */}
          </div>
        </div>
      </nav>
  
  );
}

export default navbar;
