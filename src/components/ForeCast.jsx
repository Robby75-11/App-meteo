import React from "react";
import { Card } from "react-bootstrap";

function ForecastDay({ forecast }) {
  const date = new Date(forecast.dt * 1000); // Converte timestamp Unix in millisecondi
  const dayOfWeek = new Intl.DateTimeFormat("it-IT", {
    weekday: "long",
  }).format(date);
  const iconUrl = `https://openweathermap.org/img/wn/${forecast.weather[0]?.icon}@2x.png`;
  const minTemp = Math.round(forecast.main?.temp_min);
  const maxTemp = Math.round(forecast.main?.temp_max);

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>{dayOfWeek}</Card.Title>
        {forecast.weather[0]?.icon && (
          <img
            src={iconUrl}
            alt={forecast.weather[0]?.description}
            className="mb-2"
          />
        )}
        <Card.Text>
          {maxTemp}°C / {minTemp}°C
        </Card.Text>
        <Card.Text className="text-muted">
          {forecast.weather[0]?.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ForecastDay;
