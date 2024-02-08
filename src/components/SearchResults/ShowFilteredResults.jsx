import { useCallback } from "react";

export const ShowFilteredResults = ({ results, onResultClick, showOptions }) => {


  console.log('showOptions', showOptions)
  console.log('results', results)

  const noMatchesFound = "no matches found...";

  const handleOnClick = useCallback(
    (clickedValue) => {
      console.log(clickedValue);
      onResultClick(clickedValue);
    },
    [onResultClick]
  );

  return (showOptions && results.map((result, index) => (
        <button type="button" key={`${result.name}_${index}`} onClick={() => handleOnClick(result)}>
          {result.name}, {result.country} {Number(result.lat).toFixed(3)} {Number(result.lon).toFixed(3)}
        </button>
      )))
};
