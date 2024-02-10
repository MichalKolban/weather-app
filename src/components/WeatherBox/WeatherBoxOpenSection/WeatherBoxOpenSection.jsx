import { getCurrentDateAndTime } from "../../../utils/dateTime";
import styles from "./WeatherBoxOpenSection.module.css";

export const WeatherBoxOpenSection = () => {
  const currentDate = getCurrentDateAndTime();

  return <div className={styles.openSection}>{currentDate}</div>;
};
