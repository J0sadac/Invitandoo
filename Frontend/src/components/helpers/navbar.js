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
            {/* <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
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
              <li className="nav-item dropdown">
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
              </li> 
          
            </ul> */}

            {/* <button type="button" className="btn btn-outline-dark">
              
            </button> */}
          </div>
        </div>
      </nav>
  
  );
}

export default navbar;
