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
                  <h4 className="card-title">Rapidité</h4>
                  <p>
                    Bchat offre une expérience de discussions rapides de le réception à l'envoie des messages.
                  </p>
                </div>
                <div className="card-icon">
                  <i class="far fa fa-tachometer-alt"></i>
                </div>
              </div>
            </div>
            <div className="card left-pane">
              <div className="card-body">
                <div className="text-wrapper">
                  <h4 className="card-title">Appel Audio</h4>
                  <p>
                    Profitez des appels audios gratuits pour appeller dans le monde entier.
                  </p>
                </div>
                <div className="card-icon">
                  <i className="far fa fa-phone"></i>
                </div>
              </div>
            </div>
            <div className="card left-pane">
              <div className="card-body">
                <div className="text-wrapper">
                  <h4 className="card-title">Traduction</h4>
                  <p>
                    Traduisez les messages qu'on vous envoit et que vous envoyer.
                  </p>
                </div>
                <div className="card-icon">
                  <i className="far fa fa-language"></i>
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
                  <i className="far fa fa-globe"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Sans limite</h4>
                  <p>
                    Discutez avec le monde entier sur bchat sans restrictions, ne vous limitez pas qu'à vos contacts.
                  </p>
                </div>
              </div>
            </div>
            <div className="card right-pane">
              <div className="card-body">
                <div className="card-icon">
                  <i className="far fa fa-hand-holding"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Fiabilité</h4>
                  <p>
                  Pas de crash serveur, l'application fonctionne 24h/24.
                  </p>
                </div>
              </div>
            </div>
            <div className="card right-pane">
              <div className="card-body">
                <div className="card-icon">
                  <i className="fas fa fa-cloud"></i>
                </div>
                <div className="text-wrapper">
                  <h4 className="card-title">Basé sur cloud</h4>
                  <p>
                    Vous pouvez changer de téléphone comme vous voulez, vos données seront toujours là. 
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
