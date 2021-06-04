export default function Contact() {
  return (
    <div id="contact" className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>CONTACT</h2>
            <ul className="list-unstyled li-space-lg">
              <li className="address">
                N'hésitez pas à nous contactez ou veuillez juste remplir le formulaire ci-dessous.
              </li>
              {/* <li>
                <i className="fas fa-map-marker-alt"></i>22 Innovative, San
                Francisco, CA 94043, US
              </li> */}
              <li>
                <i className="fas fa-phone"></i>
                <a className="blue" href="tel:+243974820117">
                  +243 974 820 117
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a className="blue" href="mailto:bchatech@gmail.com">
                bchatech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <form id="contactForm" data-toggle="validator" data-focus="false">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control-input"
                  id="cname"
                  required
                />
                <label className="label-control" htmlFor="cname">
                  Nom
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control-input"
                  id="cemail"
                  required
                />
                <label className="label-control" htmlFor="cemail">
                  Email
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control-textarea"
                  id="cmessage"
                  required
                ></textarea>
                <label className="label-control" htmlFor="cmessage">
                  Votre message
                </label>
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <button type="submit" className="form-control-submit-button">
                  ENVOYER LE MESSAGE
                </button>
              </div>
              <div className="form-message">
                <div id="cmsgSubmit" className="h3 text-center hidden"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
