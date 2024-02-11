import { useState } from "react";
import { Layout } from "./Layout/Layout";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { WeatherBox } from "./components/WeatherBox/WeatherBox";

function App() {
  const [results, setResults] = useState([]);
  const [city, setCity] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Layout>
        <h2>Weather.me</h2>
        <div>
          <SearchBar
            setResults={setResults}
            onFindAnotherCity={(val) => setShowOptions(val)}
          />
          <SearchResults
            results={results}
            showOptions={showOptions}
            onShowOptions={(val) => setShowOptions(val)}
            onResultClick={(val) => setCity(val)}
          />
        </div>
        <WeatherBox cityObj={city} />
      </Layout>
    </>
  );
}

export default App;
