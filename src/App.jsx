import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import DailyForecast from "./components/DailyForecast.jsx";
import { Container } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar.jsx";
import Footer from "./components/Footer.jsx";

const API_KEY = "9f5722632e5de11e5410a07150346f95";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setCurrentWeather(null);
    setForecast(null);

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=it`;

    try {
      const currentWeatherResponse = await fetch(currentWeatherUrl);
      if (!currentWeatherResponse.ok) {
        const errorData = await currentWeatherResponse.json();
        throw new Error(
          errorData.message || "Errore nel recupero dei dati meteo attuali."
        );
      }
      const currentWeatherData = await currentWeatherResponse.json();
      setCurrentWeather(currentWeatherData);

      const forecastResponse = await fetch(forecastUrl);
      if (!forecastResponse.ok) {
        const errorData = await forecastResponse.json();
        throw new Error(
          errorData.message || "Errore nel recupero delle previsioni."
        );
      }
      const forecastData = await forecastResponse.json();
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary min-vh-100 ">
      {""}
      <MyNavbar />
      <Container className="mt-5 bg-light py-2 ">
        <h1>GloboMeteo</h1>
        <SearchBar onSearch={handleSearch} />

        {loading && <p>Caricamento dati...</p>}
        {error && <p className="text-danger">Errore: {error}</p>}

        {currentWeather && <CurrentWeather weatherData={currentWeather} />}
        {forecast && <DailyForecast forecastData={forecast} />}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
