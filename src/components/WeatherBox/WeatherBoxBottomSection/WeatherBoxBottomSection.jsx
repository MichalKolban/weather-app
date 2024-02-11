import styles from "./WeatherBoxBottomSection.module.css";

export const WeatherBoxBottomSection = ({ details }) => {
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
    </div>
  );
};
