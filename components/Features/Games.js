export default function Games() {
  return (
    <div
      className="tab-pane fade"
      id="tab-2"
      role="tabpanel"
      aria-labelledby="tab-2"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src="/images/features-iphone-2.png"
              alt="alternative"
            />
          </div>
          <div className="col-md-8">
            <div className="text-area">
              <h3>Défiez vos amis avec nos jeux.</h3>
              <p>
              Défiez vos amis avec notre collection des jeux. Une collection qui grandit chaque mois pour une exprérience de discussions plus captivante.
              </p>
            </div>
            <div className="icon-cards-area">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa fa-gamepad"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">A vous de jouer</h4>
                  <p>
                    Passez des moments plus captivants avec des jeux incroyables.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="far fa fa-trophy"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Compétition</h4>
                  <p>
                    Participer à des compétitions pour comparer vos niveaux avec les joueurs.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <i className="far fa fa-bell"></i>
                </div>
                <div className="card-body">
                  <h4 className="card-title">Notification</h4>
                  <p>
                    Soyez notifier de l'avancer de vos parties en cours. 
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
