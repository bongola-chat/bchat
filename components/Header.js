export default function Header() {
  return (
    <header id="header" className="header">
      <div className="header-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1>
                  PARLER <br />
                  FOR
                  <span id="js-rotating">
                    DE TOUT, A TOUT LE MONDE, PARTOUT DANS LE MONDE
                  </span>
                </h1>
                <p className="p-large">
                  Leno is one of the easiest and feature packed marketing
                  automation apps in the market. Download it today!
                </p>
                {/* Available on AppStore */}
                {/* <a className="btn-solid-lg page-scroll" href="#your-link">
                  <i className="fab fa-apple"></i>APP STORE
                </a> */}
                <a className="btn-solid-lg page-scroll" href="#your-link">
                  <i className="fab fa-google-play"></i>PLAY STORE
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/header-iphone.png"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
