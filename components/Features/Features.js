import Messaging from "./Messaging";
import Games from "./Games";
import AI from "./AI";

export default function Features() {
  return (
    <div id="features" className="tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>FONCTIONNALITES</h2>
            <div className="p-heading p-large">
              Bchat a été développé pour accroître l'interaction sociale en
              brissant la barrière linguistique.
            </div>
          </div>
        </div>
        <div className="row">
          {/* Tabs Links */}
          <ul className="nav nav-tabs" id="lenoTabs" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="nav-tab-1"
                data-toggle="tab"
                href="#tab-1"
                role="tab"
                aria-controls="tab-1"
                aria-selected="true"
              >
                <i className="fas fa-cog"></i>Messaging
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-tab-2"
                data-toggle="tab"
                href="#tab-2"
                role="tab"
                aria-controls="tab-2"
                aria-selected="false"
              >
                <i className="fas fa-binoculars"></i>Jeux
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="nav-tab-3"
                data-toggle="tab"
                href="#tab-3"
                role="tab"
                aria-controls="tab-3"
                aria-selected="false"
              >
                <i className="fas fa-search"></i>IA
              </a>
            </li>
          </ul>
        
            {/* Tabs Contents */}
            <div className="tab-content" id="lenoTabsContent">
                <Messaging />
                <Games />
                <AI />
            </div>
        </div>
      </div>
    </div>
  );
}
