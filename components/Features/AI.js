export default function AI() {
  return (
    <div
      className="tab-pane fade"
      id="tab-3"
      role="tabpanel"
      aria-labelledby="tab-3"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="icon-cards-area">
              <div className="card">
                <div className="card-icon">
                  <i className="far fa-calendar-check"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Calendar Input</h4>
                  <p>
                    Schedule your appointments, meetings and periodical
                    evaluations using the provided in-app calendar option
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="far fa-file-code"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Visual Editor</h4>
                  <p>
                    Leno provides a well designed and ergonomic visual editor
                    for you to edit your notes and input data
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Good Foundation</h4>
                  <p>
                    Get a solid foundation for your self development efforts.
                    Try Leno mobile app for any mobile platform
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="far fa-bookmark"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Easy Reading</h4>
                  <p>
                    Reading focus mode for long form articles, ebooks and other
                    materials which involve large text areas
                  </p>
                </div>
              </div>
            </div>

            <div className="text-area">
              <h3>Monitoring Tools Evaluation</h3>
              <p>
                Monitor the evolution of your finances and health state using
                tools integrated in Leno. The generated real time reports can be
                filtered based on any
                <a className="turquoise" href="#your-link">
                  desired criteria
                </a>
                .
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <img
              className="img-fluid"
              src="/images/features-iphone-3.png"
              alt="alternative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
