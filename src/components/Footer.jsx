import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-3 mt-4">
      <Container>
        <Row>
          <Col className="text-center text-muted">
            &copy; {currentYear} GloboMeteo - Tutti i diritti riservati.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
