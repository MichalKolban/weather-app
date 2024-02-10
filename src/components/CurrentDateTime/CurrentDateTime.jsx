import { getCurrentDateAndTime } from "../../utils/dateTime";
import styles from "./CurrentDateTime.module.css";

export const CurrentDateTime = () => {
  const currentDate = getCurrentDateAndTime();
  return <div className={styles.dateTime}>{currentDate}</div>;
};
