export interface ListItems {
  date_for: string;
  fajr: string;
  shurooq: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}
export interface Weather {
  pressure: number;
  temperature: string;
}

export interface PrayerGuide {
  title: string;
  query: string;
  for: string;
  prayer_method_name: string;
  timezone: number;
  daylight: number;
  map_image: string;
  today_weather: Weather;
  link: string;
  latitude: string;
  longitude: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  status_code: number;
  country: string;
  country_code: string;
  qibla_direction: string;
  items: ListItems[];
  status_description: string;
}
