import styles from "./WeatherBoxMidSection.module.css";
import ICON_PRESSURE from "../../../assets/pressure.png";
import ICON_HUMIDITY from "../../../assets/humidity.png";
import ICON_WINDSPEED from "../../../assets/wind.png";

export const WeatherBoxMidSection = ({ moreInfo }) => {
  return (
    <div className={styles.midSection}>
      <div className={styles.smallSection}>
        <img src={ICON_PRESSURE} />
        <div>{moreInfo.pressure} hPa</div>
        <div>pressure</div>
      </div>
      <div className={styles.smallSection}>
        <img src={ICON_HUMIDITY} />
        <div>{moreInfo.humidity} %</div>
        <div>humidity</div>
      </div>
      <div className={styles.smallSection}>
        <img src={ICON_WINDSPEED} />
        <div>{moreInfo?.wind?.speed} m/s</div>
        <div>wind speed</div>
      </div>
    </div>
  );
};
