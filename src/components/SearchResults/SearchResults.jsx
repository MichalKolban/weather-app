import styles from "./SearchResults.module.css";

export const SearchResults = ({ results }) => {
  const showFilteredOptions = results.map((result, id) => {
    return (
      <div key={id}>
        {result.name}, {result.country} {Number(result.lat).toFixed(3)} {Number(result.lon).toFixed(3)}
      </div>
    );
  });
  const noMatchesFound = "no matches found...";
  return <div className={styles.resultContainer}>{results.length === 0 ? noMatchesFound : showFilteredOptions}</div>;
};
