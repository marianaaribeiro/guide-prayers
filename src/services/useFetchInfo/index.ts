import { api } from "../api";
import { PrayerGuide } from "./types";

export const useFetchInfo = async (location: string): Promise<PrayerGuide> => {
  return (await api.get<PrayerGuide>(`${location}.json`)).data;
};
