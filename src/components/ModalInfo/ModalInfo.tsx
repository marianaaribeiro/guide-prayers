import React, { useEffect, useRef, useState } from "react";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar,
  useIonActionSheet,
} from "@ionic/react";
import { ListItems } from "../../services/useFetchInfo/types";
import "./ModalInfo.css";
import { bookOutline } from "ionicons/icons";
interface ModalInfoProps {
  list: ListItems;
  img: string;
}

const ModalInfo: React.FC<ModalInfoProps> = ({ list, img }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);
  const [present] = useIonActionSheet();

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  function canDismiss() {
    return new Promise<boolean>((resolve, reject) => {
      present({
        header: "Tem certeza que deseja fechar?",
        buttons: [
          {
            text: "Sim",
            role: "confirm",
          },
          {
            text: "Não",
            role: "cancel",
          },
        ],
        onWillDismiss: (ev) => {
          if (ev.detail.role === "confirm") {
            resolve(true);
          } else {
            reject();
          }
        },
      });
    });
  }
  return (
    <IonModal
      className="open-modal"
      ref={modal}
      trigger="open-modal"
      canDismiss={canDismiss}
      presentingElement={presentingElement!}
    >
      <IonHeader>
        <IonToolbar className="titleList">
          <IonTitle>Horários das orações</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => dismiss()}>Fechar</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle size="large" className="titleModals">
          Tempo: {new Date().toString()}
        </IonTitle>
        <IonCard>
          <img alt="Allah" src={img} />

          <IonCardHeader>
            <IonCardTitle>Data: {list.date_for}</IonCardTitle>
            <IonCardSubtitle>
              Momento de Horação! <br />
              Informamos que os horário das horações podem variar.
            </IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Asr</IonLabel>
              <IonLabel className="descriptionList">{list.asr}</IonLabel>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Dhuhr</IonLabel>
              <IonLabel className="descriptionList">{list.dhuhr}</IonLabel>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Fajr</IonLabel>
              <IonLabel className="descriptionList">{list.fajr}</IonLabel>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Isha</IonLabel>
              <IonLabel className="descriptionList">{list.isha}</IonLabel>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Maghrib</IonLabel>
              <IonLabel className="descriptionList">{list.maghrib}</IonLabel>
            </IonItem>
            <IonItem lines="inset">
              <IonIcon icon={bookOutline} slot="start"></IonIcon>
              <IonLabel className="descriptionList">Shurooq</IonLabel>
              <IonLabel className="descriptionList">{list.shurooq}</IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonModal>
  );
};
export default ModalInfo;
