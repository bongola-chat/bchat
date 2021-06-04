export default function Download() {
  return (
    <div className="basic-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>
                Téléchargez <span className="blue">Bchat</span>
              </h2>
              <p className="p-large">
                Parler de tout; à tout le monde, partout dans le monde.
              </p>
              {/* <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-apple"></i>APP STORE
              </a> */}
              <a className="btn-solid-lg" href="https://play.google.com/store/apps/details?id=chat.bongola.bongola_chat">
                <i className="fab fa-google-play"></i>PLAY STORE
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-7">
            <div className="image-container">
              <img
                className="img-fluid"
                src="/images/download.png"
                alt="alternative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
