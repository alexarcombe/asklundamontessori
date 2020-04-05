import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Quality() {
  return (
    <Container className="section-margin">
      <Row>
        <Col>
          <h1 className="display-4 text-center mb-4">
            Systematiskt Kvalitetsarbete
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="m-auto text-center">
          <p>
            Pedagogerna arbetar målmedvetet med barnets utveckling och lärande i
            centrum utifrån läroplanen och Montessoripedagogiken.
          </p>

          <p>
            Vi synliggör vår verksamhet och våra mål genom observationer,
            dokumentationer, analyser och utvärdering.
          </p>

          <p>
            Aktivt kvalitetsarbete leder till kvalitetsutveckling för vår
            verksamhet.
          </p>

          <p>Vårt Systematiska Kvalitets Arbete (SKA)</p>
        </Col>
        <Col md={6} className="text-center">
          <Image src="/images/quality/kvalitet.jpg" fluid />
        </Col>
      </Row>
    </Container>
  );
}

export default Quality;
