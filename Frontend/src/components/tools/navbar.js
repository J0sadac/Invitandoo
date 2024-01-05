import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary contenedor-navbar">
      <div className="container-fluid">
        <Link className="titulo-link" to='/'>
          <h2 className="titulo">Invitandoo</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link links" to="/mi_evento">Mi evento</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link links" to="/">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
