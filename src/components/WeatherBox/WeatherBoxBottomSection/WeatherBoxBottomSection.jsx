import { useState } from "react";
import styles from "./WeatherBoxBottomSection.module.css";

export const WeatherBoxBottomSection = ({ details }) => {
  console.log("det", details);

  const formatTime = (time) => {
    const date = new Date((time + details.timezone) * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format

    // const formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

    const formattedTime = date.toTimeString();
    return formattedTime;
  };

  return (
    <div className={styles.botSection}>
      <div className={styles.details}>
        temperature <span>{Number(details.temp).toFixed(1)}°</span>
      </div>
      <div className={styles.details}>
        temperature minimum <span>{Number(details.temp_min).toFixed(1)}°</span>
      </div>
      <div className={styles.details}>
        temperature maximum <span>{Number(details.temp_max).toFixed(1)}°</span>
      </div>
      <div className={styles.details}>
        temperature feels like{" "}
        <span>{Number(details.feels_like).toFixed(1)}°</span>
      </div>
      <div className={styles.details}>
        clouds <span>{details.clouds?.all}%</span>
      </div>
      <div className={styles.details}>
        {/* sunrise <span>{formatTime(details.sys?.sunrise)}</span> */}
      </div>
      <div className={styles.details}>
        {/* sunset <span>{formatTime(details.sys?.sunset)}</span> */}
      </div>
    </div>
  );
};
