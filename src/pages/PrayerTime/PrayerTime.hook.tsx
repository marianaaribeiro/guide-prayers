import { useMemo, useState } from "react";
import { useFetchInfo } from "../../services/useFetchInfo";
import { PrayerGuide } from "../../services/useFetchInfo/types";

export const usePrayerTimeHook = () => {
  const [listPrayerGuide, setListPrayerGuide] = useState<PrayerGuide>();
  const [error, setError] = useState<boolean>(false);

  const [location, setLocation] = useState<string>();
  const [status, setStatus] = useState<boolean>(false);

  const handleClick = (locations: string): void => {
    useFetchInfo(locations)
      .then((response) => {
        if (response.status_code === 1) {
          setListPrayerGuide(response);
          setStatus(false);
        } else {
          setStatus(true);
        }
      })
      .catch((error) => {
        setError(true);
      });
  };
  const getEventLocation = (event: any): void => {
    setLocation(event.detail.value);
  };

  const resources = useMemo(() => {
    return {
      title: "Tempo de Orações",
      question: "Qual é o seu Pais?",
      button: "Consultar",
      titleCard: "Desculpe-nos",
      descriptionCard:
        "  Mas, não é possível pesquisar os horários das horações neste Pais, por favor, tentar novamente com outra localização.",
      titleList: "Horário das orações dirárias:",
      subTitleList: "Data:",
      descriptionList: "Vamos nos preparar para iniciar as horações do dia!",
    };
  }, []);

  return {
    listPrayerGuide,
    status,
    error,
    location,
    resources,
    getEventLocation,
    handleClick,
  };
};
