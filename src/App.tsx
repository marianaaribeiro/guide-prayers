import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { bookOutline, earthOutline, images } from "ionicons/icons";
import PrayerTime from "./pages/PrayerTime/PrayerTime";
import TabNew from "./pages/TabNew/TabNew";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CameraApp from "./pages/CameraApp/CameraApp";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tabNew">
            <TabNew />
          </Route>
          <Route exact path="/prayerTime">
            <PrayerTime />
          </Route>
          <Route exact path="/camera">
            <CameraApp />
          </Route>
          <Route exact path="/">
            <Redirect to="/prayerTime" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tabNew" href="/tabNew">
            <IonIcon
              aria-hidden="true"
              icon={earthOutline}
              size="small"
              aria-label="Novidades"
            />
            <IonLabel>Orientações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="prayerTime" href="/prayerTime">
            <IonIcon
              aria-hidden="true"
              icon={bookOutline}
              size="small"
              aria-label="Orações"
            />
            <IonLabel>Orações</IonLabel>
          </IonTabButton>
          <IonTabButton tab="camera" href="/camera">
            <IonIcon
              aria-hidden="true"
              icon={images}
              size="small"
              aria-label="camera"
            />
            <IonLabel>Camera</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
