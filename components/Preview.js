export default function Preview() {
  return (
    <div id="preview" className="basic-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>PREVIEW</h2>
            <div className="p-heading p-large">
              Ayez une idée sur l'application.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="image-container">
              <div className="video-wrapper">
                <a
                  className="popup-youtube"
                  href="https://www.youtube.com/watch?v=g-UPjWh-P_Y"
                  data-effect="fadeIn"
                >
                  <img
                    className="img-fluid"
                    src="/images/video-frame.jpg"
                    alt="alternative"
                  />
                  <span className="video-play-button">
                    <span></span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
