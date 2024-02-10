export const getWeatherDetails = async (latitude, longitude) => {
  const API_KEY = "21f52349a19f5008a4063add5d04eaec";
  // const API_KEY = import.meta.env.VITE_API_KEY;
  console.log("API key", API_KEY);
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  const response = await fetch(weatherURL);
  const data = await response.json();
  return data;
};

export const getCityCoordinates = async (val) => {
  const API_KEY = "21f52349a19f5008a4063add5d04eaec";
  // const API_KEY = import.meta.env.API_KEY;
  const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${val}&limit=5&appid=${API_KEY}`;
  const response = await fetch(geoURL);
  const data = await response.json();
  const results = data.filter((data) => {
    return val && data && data.name && data.name.toLowerCase().includes(val);
  });
  return results;
};
