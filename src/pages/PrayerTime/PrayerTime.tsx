import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { bookOutline } from "ionicons/icons";
import CardInfo from "../../components/CardInfo/CardInfo";

import "./PrayerTime.css";
import { usePrayerTimeHook } from "./PrayerTime.hook";
import imgTop from "../../assets/life-Allah.jpg";
import imgModal from "../../assets/Allah.jpg";
import { ListItems } from "../../services/useFetchInfo/types";
import ModalInfo from "../../components/ModalInfo/ModalInfo";

const PrayerTime: React.FC = () => {
  const {
    listPrayerGuide,
    location,
    status,
    resources,
    handleClick,
    getEventLocation,
  } = usePrayerTimeHook();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="titleList">
          <IonTitle>{resources.title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <CardInfo
          img={imgTop || ""}
          country={listPrayerGuide?.country || ""}
          location={listPrayerGuide?.country_code || ""}
          temperature={listPrayerGuide?.today_weather.temperature || ""}
          pressure={listPrayerGuide?.today_weather.pressure || 0}
          infoData={new Date().toString()}
        />

        <IonTitle size="large" className="title">
          {resources.question}
        </IonTitle>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput
                className="inputLocation"
                clearInput={true}
                fill="outline"
                placeholder="Pais"
                color="dark"
                value={location}
                onIonInput={(event) => getEventLocation(event)}
              ></IonInput>
            </IonCol>

            {location && (
              <IonCol id="open-modal-Error">
                <div
                  className="ion-activatable ripple-parent custom-parent containerButton"
                  onClick={() => handleClick(location)}
                >
                  <IonButton shape="round">{resources.button}</IonButton>
                  <IonRippleEffect></IonRippleEffect>
                </div>
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
        {status === true && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{resources.titleCard}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{resources.descriptionCard}</IonCardContent>
          </IonCard>
        )}
        {listPrayerGuide && (
          <>
            <IonTitle size="large" className="title">
              {resources.titleList}
            </IonTitle>
            {listPrayerGuide.items.map((list: ListItems) => (
              <>
                <IonItem lines="inset" id="open-modal">
                  <IonIcon icon={bookOutline} slot="start"></IonIcon>
                  <IonItem detail={true}>
                    <IonLabel>
                      <h3 className="titleList">
                        {resources.subTitleList} {list.date_for}
                      </h3>
                      <p>{resources.descriptionList}</p>
                    </IonLabel>
                  </IonItem>
                </IonItem>
                <ModalInfo list={list} img={imgModal} />
              </>
            ))}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PrayerTime;
