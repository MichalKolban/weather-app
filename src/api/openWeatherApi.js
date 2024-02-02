export const getData = () => {
  // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // REACT_APP_API_KEY=21f52349a19f5008a4063add5d04eaec

  const API_KEY = import.meta.env.VITE_API_KEY;

  const URL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_KEY}`;

  // valid link !
  // https://api.openweathermap.org/data/2.5/weather?lat=53.43&lon=14.59&appid=

  //valid link po polski
  // https://api.openweathermap.org/data/2.5/weather?lat=53.43&lon=14.59&lang=pl&units=metric&appid=

  //valid link + polski + celsjusz
  // https://api.openweathermap.org/data/2.5/weather?lat=53.43&lon=14.59&lang=pl&units=metric&appid=
};

export const getCityCoordinates = (value) => {
  const API_KEY = "";

  // http://api.openweathermap.org/geo/1.0/direct?q=Szczecin&limit=5&appid=

  // const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=Szczecin&limit=5&appid=${API_KEY}`;
  const geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${API_KEY}`;

  fetch(geoURL)
    .then((res) => res.json())
    .then((json) => {
      const results = json.filter((city) => {
        return value && city && city.name && city.name.toLowerCase().includes(value);
      });
      // setResults(results);
      console.log(results);
      return results;
    });
};
