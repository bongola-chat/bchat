export default function Download() {
  return (
    <div className="basic-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-5">
            <div className="text-container">
              <h2>
                Download <span className="blue">Leno</span>
              </h2>
              <p className="p-large">
                Target the right customers for your business with the help of
                Leno's patented technology and increase conversion figures in
                less than 2 weeks
              </p>
              {/* <a className="btn-solid-lg" href="#your-link">
                <i className="fab fa-apple"></i>APP STORE
              </a> */}
              <a className="btn-solid-lg" href="#your-link">
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
