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
                  <i className="far fa fa-robot"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Annastasie</h4>
                  <p>
                    L'assistante artificielle officielle de bchat. Elle est là pour vous aider avec l'application.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa fa-newspaper"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">News</h4>
                  <p>
                    Recevez les informations du mode directement sur bchat.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="far fa fa-comments"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Chatbot</h4>
                  <p>
                    Créer des robots de discussions et programmer des réponses à des questions triviales et répétitives.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-area">
              <h3>Intelligence Artificielle</h3>
              <p>
                Nous améliorons chaque nos compétences en intelligence artificielle pour vous offrir toujours beaucoup plus.
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
