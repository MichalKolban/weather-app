import { useState, useEffect } from "react";
import styles from "./WeatherBox.module.css";
import { WeatherBoxTopSection } from "./WeatherBoxTopSection/WeatherBoxTopSection";
import { WeatherBoxMidSection } from "./WeatherBoxMidSection/WeatherBoxMidSection";
import { WeatherBoxBottomSection } from "./WeatherBoxBottomSection/WeatherBoxBottomSection";
import { getWeatherDetails } from "../../api/openWeatherApi";
import { CurrentDateTime } from "../CurrentDateTime/CurrentDateTime";

export const WeatherBox = ({ cityObj }) => {
  const [cityName, setCityName] = useState("");

  const [basicInfo, setBasicInfo] = useState({});
  const [moreInfo, setMoreInfo] = useState({});
  const [details, setDetails] = useState({});

  useEffect(() => {
    const { lat, lon } = cityObj;
    if (lat && lon) {
      fetchData(lat, lon);
    }
    setCityName(cityObj.name);
  }, [cityObj]);

  const fetchData = async (latitude, longitude) => {
    const lat = Number(latitude).toFixed(2);
    const lon = Number(longitude).toFixed(2);
    const data = await getWeatherDetails(lat, lon);
    const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
      data.main;
    const { wind, clouds, sys, timezone } = data;
    const { icon, description } = data.weather[0];
    const iconImg = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    setBasicInfo({ temp, description, iconImg });
    setMoreInfo({ pressure, humidity, wind });
    setDetails({
      temp,
      temp_min,
      temp_max,
      feels_like,
      clouds,
      sys,
      timezone,
    });
  };

  return (
    <div className={styles.weatherBox}>
      {!cityName ? (
        <div className={styles.weatherBoxStartSection}>
          <CurrentDateTime />
        </div>
      ) : (
        <>
          <WeatherBoxTopSection cityName={cityName} basicInfo={basicInfo} />
          <WeatherBoxMidSection moreInfo={moreInfo} />
          <WeatherBoxBottomSection details={details} />
        </>
      )}
    </div>
  );
};
