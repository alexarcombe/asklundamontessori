import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Reason() {
  return (
    <Container>
      <Row className="py-5 border-bottom border-2">
        <Col md={6} className="my-auto">
          <Image src="/images/home/klassrum.jpg" rounded fluid />
        </Col>
        <Col md={6} className="my-auto">
          <h4 className="text-center my-3">Syftet med Montessoripedagogiken</h4>
          <ul>
            <li>Den tar tillvara barnets spontana lust för arbete</li>
            <li>
              Barnen har större möjlighet att utvecklas efter sina egna
              förutsättningar
            </li>
            <li>Barnen styr själv över sin kunskapsinlärning</li>
            <li>Tränar barnens självständighet</li>
          </ul>

          <h5 className="text-center">
            Pedagogiken och Materialet går hand i hand
          </h5>

          <ul>
            <li>Materialen bidrar till en lust att lära</li>
            <li>Materialen kan aldrig bli viktigare än barnen själva</li>
            <li>
              Materialet ska vara ett redskap på väg mot en större förståelse
            </li>
          </ul>

          <p>
            Läs mer om <Link to="/pedagogik">Montessoripedagogiken</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Reason;
