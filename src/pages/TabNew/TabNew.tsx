import {
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./TabNew.css";
import imgTop from "../../assets/10759784.jpg";

const TabNew: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="titleToolbar">
          <IonTitle>Orientações</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonImg src={imgTop} alt="oração"></IonImg>

        <div className="container">
          <IonTitle className="titleNew" size="large">
            Forma correta de executar as orações
          </IonTitle>
          <IonText className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default TabNew;
