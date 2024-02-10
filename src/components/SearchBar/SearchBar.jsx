import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { useDebounce } from "../../utils/debounce";
import { getCityCoordinates } from "../../api/openWeatherApi";

export const SearchBar = ({ setResults, onFindAnotherCity }) => {
  const [textInput, setTextInput] = useState("");

  const fetchData = async (val) => {
    let filteredData;
    if (val.length > 0) {
      filteredData = await getCityCoordinates(val);
    }
    setResults(filteredData);
  };

  useDebounce(
    () => {
      fetchData(textInput.toLocaleLowerCase());
    },
    [textInput],
    800
  );

  const handleChange = (val) => {
    console.log("wywolanie na input");
    setTextInput(val);
    onFindAnotherCity(true);
  };

  return (
    <>
      <div className={styles.searchBarWrapper}>
        <div className={styles.icon}>
          <FaSearch id="search-icon" />
        </div>
        <input
          className={styles.searchBar}
          placeholder="type to search"
          value={textInput}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};
