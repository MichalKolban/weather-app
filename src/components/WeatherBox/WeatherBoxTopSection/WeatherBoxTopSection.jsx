import styles from "./WeatherBoxTopSection.module.css";
import ICON_LOCATION from "../../../assets/location.png";

export const WeatherBoxTopSection = ({ cityName, basicInfo }) => {
  return (
    <div className={styles.topSection}>
      <h2>
        <img src={ICON_LOCATION} />
        {cityName}
      </h2>
      <div>Poniedziałek, 6 luty 9:22</div>
      <div className={styles.temperature}>
        {Number(basicInfo.temp).toFixed(1)}°
      </div>
      <div className={styles.icon}>
        <p>{basicInfo.description}</p>
        <img src={basicInfo.icon} />
      </div>
    </div>
  );
};
