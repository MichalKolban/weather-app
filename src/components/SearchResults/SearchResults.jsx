// import { useState } from "react";
// import styles from "./SearchResults.module.css";

// export const SearchResults = ({ results }) => {
//   const [selectedCity, setSelectedCity] = useState("");

//   console.log(results);

//   const handleSelectedCity = (e) => {
//     // console.log(e);
//     console.log(e.target);
//     // console.log(e.current);
//   };

//   const showFilteredOptions = results.map((result, id) => {
//     return (
//       <button className={styles.searchResult} key={id} onClick={() => handleSelectedCity(result.name)}>
//         {result.name}, {result.country} {Number(result.lat).toFixed(3)} {Number(result.lon).toFixed(3)}
//       </button>
//     );
//   });
//   const noMatchesFound = "no matches found...";
//   return <div className={styles.resultContainer}>{results.length === 0 ? noMatchesFound : showFilteredOptions}</div>;
// };

import { memo, useCallback } from "react";

import styles from "./SearchResults.module.css";

// export const ShowFilteredResults = ({ results, onResultClick }) => {
//   const handleOnClick = useCallback(
//     (clickedBox) => {
//       console.log(clickedBox);
//       onResultClick(clickedBox);
//     },
//     [onResultClick]
//   );
//   return (
//     <div>
//       {results.map((result, index) => (
//         <button type="button" key={`${result.name}_${index}`} onClick={() => handleOnClick(result)}>
//           {result.name}, {result.country} {Number(result.lat).toFixed(3)} {Number(result.lon).toFixed(3)}
//         </button>
//       ))}
//     </div>
//   );
// };

import { ShowFilteredResults } from "./ShowFilteredResults";

export const SearchResults = ({ results, onResultClick }) => {
  const noMatchesFound = "no matches found...";

  const handleResultClick = (clickedBox) => {
    console.log("Clicked result all", clickedBox);
  };
  return (
    <div className={styles.resultContainer}>
      {results.length === 0 ? (
        noMatchesFound
      ) : (
        <ShowFilteredResults results={results} onResultClick={handleResultClick} />
      )}
    </div>
  );
};

// export default memo(SearchResults);
