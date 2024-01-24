import { useState } from "react";
import { Layout } from "./Layout/Layout";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { WeatherBox } from "./components/WeatherBox/WeatherBox";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <Layout>
        <h1>Weather.me</h1>
        <div>
          <SearchBar setResults={setResults} />
          <SearchResults results={results} />
        </div>
        <WeatherBox />
      </Layout>
      <div>Remaning free api requests 1321 / 2000</div>
    </>
  );
}

export default App;