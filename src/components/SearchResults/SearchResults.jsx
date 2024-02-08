import { useState } from "react";
import styles from "./SearchResults.module.css";
import { ShowFilteredResults } from "./ShowFilteredResults";

export const SearchResults = ({ results, showOptions, onResultClick, onShowOptions }) => {

  const noMatchesFound = "no matches found...";

  const handleResultClick = (clickedBox) => {   // trzeba dodać state aby zamykac liste przy click
    console.log("Clicked result all", clickedBox);
    onShowOptions(false)
    onResultClick(clickedBox);
  };
  return (
    <div className={styles.resultContainer}>
        <ShowFilteredResults results={results} onResultClick={handleResultClick} showOptions={showOptions} />
    </div>
  );
};
