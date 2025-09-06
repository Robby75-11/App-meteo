import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CityImage from "./CityImage.jsx";

const API_KEY = "9f5722632e5de11e5410a07150346f95";

const WeatherDetails = () => {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=it`
        );
        if (!response.ok) throw new Error("Errore nel recupero meteo");
        const data = await response.json();
        setWeather(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Dettagli Meteo: {city}</h2>
      <CityImage city={city} /> {/* Mostra l'immagine della città */}
      {weather ? (
        <div className="text-center">
          <p>Temperatura: {weather.main.temp}°C</p>
          <p>Condizioni: {weather.weather[0].description}</p>
          {/* Puoi aggiungere altri dati meteo qui */}
        </div>
      ) : (
        <p className="text-center">Caricamento dati meteo...</p>
      )}
    </div>
  );
};

export default WeatherDetails;
