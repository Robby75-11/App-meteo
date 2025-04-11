import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import ForecastDay from "./ForecastDay.jsx";

function DailyForecast({ forecastData }) {
  if (!forecastData || forecastData.length === 0) {
    return <p>Nessuna previsione disponibile.</p>;
  }

  const dailyForecasts = forecastData.list.filter(
    (item, index) => index % 8 === 0
  );

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Previsioni Giornaliere</Card.Title>
        <Row className="gy-3">
          {dailyForecasts.map((dayForecast) => (
            <Col key={dayForecast.dt} md={6} lg={3}>
              <ForecastDay forecast={dayForecast} />
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
}

export default DailyForecast;
