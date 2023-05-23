import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

interface CardInfoProps {
  location: string;
  country: string;
  img: string;
  pressure: number;
  temperature: string;
  infoData: string;
}

const CardInfo: React.FC<CardInfoProps> = ({
  img,
  country,
  location,
  temperature,
  pressure,
  infoData,
}) => {
  return (
    <IonCard>
      <img alt="Allah" src={img} />
      {country && location && (
        <IonCardHeader>
          <IonCardTitle>{country}</IonCardTitle>
          <IonCardSubtitle>{location}</IonCardSubtitle>
        </IonCardHeader>
      )}
      <IonCardContent>{infoData} </IonCardContent>
      {temperature && pressure && (
        <IonCardContent>
          A temperatura está: {temperature}º e a pressão está em: {pressure}
        </IonCardContent>
      )}
    </IonCard>
  );
};
export default CardInfo;
