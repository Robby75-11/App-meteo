import React, { useState } from "react";
import { Form, FormControl, Button, Row, Col } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita il ricaricamento della pagina
    if (city.trim()) {
      onSearch(city); // Chiama la funzione passata dal componente genitore con la città
      setCity(""); // Resetta l'input dopo la ricerca
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Row className="align-items-center">
        <Col md={9}>
          <FormControl
            type="text"
            placeholder="Inserisci la città"
            className="w-75
            "
            value={city}
            onChange={handleChange}
          />
        </Col>
        <Col md={3}>
          <Button type="submit" className="w-50">
            Cerca
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
