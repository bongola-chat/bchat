export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
      <a className="navbar-brand logo-image" href="/">
        <img src="/logo_svg.png/" alt="alternative" />
      </a>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        ari-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/#header">
              ACCUEIL <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/#features">
              FONCTIONNALITES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/#preview">
              PREVIEW
            </a>
          </li>
          {/* Dropdown Menu */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle page-scroll"
              href="#details"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              DETAILES
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/terms">
                <span className="item-text">
                  TERMES ET CONDITIONS D'UTILISATION
                </span>
              </a>
              <div className="dropdown-items-divide-hr"></div>
              <a className="dropdown-item" href="/policy">
                <span className="item-text">
                  POLITIQUE SUR LES DONNESS PRIVEES
                </span>
              </a>
            </div>
          </li>
          {/* end of dropdown menu */}
          <li className="nav-item">
            <a className="nav-link page-scroll" href="/#contact">
              CONTACT
            </a>
          </li>
        </ul>
        <span className="nav-item social-icons">
          <span className="fa-stack">
            <a href="https://facebook.com/BongolaChat/">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a href="https://instagram.com/bongola_chat/">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-instagram fa-stack-1x"></i>
            </a>
          </span>
        </span>
      </div>
    </nav>
  );
}
