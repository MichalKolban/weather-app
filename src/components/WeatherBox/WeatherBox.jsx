import styles from "./WeatherBox.module.css";

export const WeatherBox = () => {
  return (
    <div className={styles.weatherBox}>
      <div className={styles.topSection}>Sekcja top</div>
      <div className={styles.middleSection}>Sekcja mid</div>
      <div className={styles.bottomSection}>Sekcja bot</div>
    </div>
  );
};
