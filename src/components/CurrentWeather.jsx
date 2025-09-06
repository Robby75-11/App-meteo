import React from "react";
import { Card } from "react-bootstrap";
function CurrentWeather({ weatherData }) {
  if (!weatherData) {
    return <p>Inserisci una città per visualizzare il meteo.</p>;
  }

  const { name, sys, main, weather, wind, sea } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`;

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          {name}, {sys?.country}
        </Card.Title>
        <div className="d-flex align-items-center">
          {weather[0]?.icon && (
            <img src={iconUrl} alt={weather[0]?.description} className="me-3" />
          )}
          <div>
            <h2 className="mb-0">{Math.round(main?.temp)}°C</h2>
            <p className="text-muted">{weather[0]?.description}</p>
          </div>
        </div>
        <p>Percepita: {Math.round(main?.feels_like)}°C</p>
        <p>Umidità: {main?.humidity}%</p>
        <p>Vento: {wind?.speed} m/s</p>
      </Card.Body>
    </Card>
  );
}

export default CurrentWeather;
