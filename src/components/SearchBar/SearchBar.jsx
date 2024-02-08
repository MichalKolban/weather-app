import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { useDebounce } from "../../utils/debounce";
import { getCityCoordinates } from "../../api/openWeatherApi";

export const SearchBar = ({ setResults, onFindAnotherCity }) => {
  const [textInput, setTextInput] = useState("");

  const fetchData = (val) => {
    console.log("wywolanie", val);
    const API_KEY = "21f52349a19f5008a4063add5d04eaec";
    const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=${API_KEY}`;
    fetch(geoURL)
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return val && user && user.name && user.name.toLowerCase().includes(val);
        });
        console.log('result', results)
        setResults(results);
      });
  };

  useDebounce(
    () => {
      fetchData(textInput.toLocaleLowerCase());
    },
    [textInput],
    800
  );

  const handleChange = (val) => {
    console.log('wywolanie na input');
    setTextInput(val);
    onFindAnotherCity(true)
  };

  return (
    <>
      <div className={styles.searchBar}>
        <FaSearch id="search-icon" />
        <input placeholder="type to search" value={textInput} onChange={(e) => handleChange(e.target.value)} />
      </div>
    </>
  );
};
