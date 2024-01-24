import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import { useDebounce } from "../../utils/debounce";

export const SearchBar = ({ setResults }) => {
  const [textInput, setTextInput] = useState("");

  //   const fetchDeta = (val) => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((json) => {
  //         const results = json.filter((user) => {
  //           return val && user && user.name && user.name.toLowerCase().includes(val);
  //         });
  //         setResults(results);
  //       });
  //   };

  const fetchData = (val) => {
    console.log("wywolanie");
    const API_KEY = "21f52349a19f5008a4063add5d04eaec";
    const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=${API_KEY}`;
    fetch(geoURL)
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return val && user && user.name && user.name.toLowerCase().includes(val);
        });
        setResults(results);
      });
  };

  useDebounce(
    () => {
      fetchData(textInput);
    },
    [textInput],
    800
  );

  const handleChange = (val) => {
    setTextInput(val);
    // fetchData(val);
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
