import styles from "./WeatherBoxTopSection.module.css";
import ICON_LOCATION from "../../../assets/location.png";
import { CurrentDateTime } from "../../CurrentDateTime/CurrentDateTime";

export const WeatherBoxTopSection = ({ cityName, basicInfo }) => {
  return (
    <div className={styles.topSection}>
      <h2>
        <img className={styles.location} src={ICON_LOCATION} />
        {cityName}
      </h2>
      <CurrentDateTime />
      <div className={styles.temperature}>
        {Number(basicInfo.temp).toFixed(1)}°
      </div>
      <div className={styles.icon}>
        <p>{basicInfo.description}</p>
        <img src={basicInfo.iconImg} />
      </div>
    </div>
  );
};
