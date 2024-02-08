import { useState, useEffect } from "react";
import styles from "./WeatherBox.module.css";
import { WeatherBoxTopSection } from "./WeatherBoxTopSection/WeatherBoxTopSection";
import { WeatherBoxMidSection } from "./WeatherBoxMidSection/WeatherBoxMidSection";
import { WeatherBoxBottomSection } from "./WeatherBoxBottomSection/WeatherBoxBottomSection";

export const WeatherBox = ({ cityObj }) => {
  const [cityName, setCityName] = useState("");

  const [basicInfo, setBasicInfo] = useState({});
  const [moreInfo, setMoreInfo] = useState({});
  const [details, setDetails] = useState({});

  useEffect(() => {
    const { lat, lon } = cityObj;
    fetchData(lat, lon);
    setCityName(cityObj.name);
  }, [cityObj]);

  const fetchData = (latitude, longitude) => {
    const API_KEY = "21f52349a19f5008a4063add5d04eaec";
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

    fetch(weatherURL)
      .then((res) => res.json())
      .then((json) => {
        console.log("JSON", json);
        const iconID = json.weather[0].icon;
        const icon = `https://openweathermap.org/img/wn/${iconID}@2x.png`;
        // setWeatherObj(json);
        const { temp, feels_like, temp_min, temp_max, pressure, humidity } =
          json.main;
        const { wind, clouds, sys, timezone } = json;
        const { description } = json.weather[0];

        setBasicInfo({ temp, description, icon });
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
      });
  };

  return (
    <div className={styles.weatherBox}>
      <WeatherBoxTopSection cityName={cityName} basicInfo={basicInfo} />
      <WeatherBoxMidSection moreInfo={moreInfo} />
      <WeatherBoxBottomSection details={details} />
    </div>
  );
};
