export default function Messaging() {
  return (
    <div
      className="tab-pane fade show active"
      id="tab-1"
      role="tabpanel"
      aria-labelledby="tab-1"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card left-pane first">
              <div className="card-body">
                <div className="text-wrapper">
                  <h4 className="card-title">Goal Setting</h4>
                  <p>
                    Like any self improving process, everything starts with
                    setting your goals and committing to them
                  </p>
                </div>
                <div className="card-icon">
                  <i className="far fa-compass"></i>
                </div>
              </div>
            </div>
            <div className="card left-pane">
              <div className="card-body">
                <div className="text-wrapper">
                  <h4 className="card-title">Visual Editor</h4>
                  <p>
                    Leno provides a well designed and ergonomic visual editor
                    for you to edit your notes and input data
                  </p>
                </div>
                <div className="card-icon">
                  <i className="far fa-file-code"></i>
                </div>
              </div>
            </div>
            <div className="card left-pane">
              <div className="card-body">
                <div className="text-wrapper">
                  <h4 className="card-title">Refined Options</h4>
                  <p>
                    Each option packaged in the app's menus is provided in order
                    to improve your personal development status
                  </p>
                </div>
                <div className="card-icon">
                  <i className="far fa-gem"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <img
              className="img-fluid"
              src="/images/features-iphone-1.png"
              alt="alternative"
            />
          </div>

          <div className="col-lg-4">
            <div className="card right-pane first">
              <div className="card-body">
                <div className="card-icon">
                  <i className="far fa-calendar-check"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Calendar Input</h4>
                  <p>
                    Schedule your appointments, meetings and periodical
                    evaluations using the provided in-app calendar option
                  </p>
                </div>
              </div>
            </div>
            <div className="card right-pane">
              <div className="card-body">
                <div className="card-icon">
                  <i className="far fa-bookmark"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Easy Reading</h4>
                  <p>
                    Reading focus mode for long form articles, ebooks and other
                    materials which involve large text areas
                  </p>
                </div>
              </div>
            </div>
            <div className="card right-pane">
              <div className="card-body">
                <div className="card-icon">
                  <i className="fas fa-cube"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Good Foundation</h4>
                  <p>
                    Get a solid foundation for your self development efforts.
                    Try Leno mobile app for any mobile platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
