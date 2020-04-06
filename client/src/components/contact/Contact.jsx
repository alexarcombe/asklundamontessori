import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import MyGoogleMaps from './MyGoogleMaps';
import ContactCard from './ContactCard';

const contactPerson = [
  {
    id: 0,
    name: 'Maria Arcombe',
    role: 'Rektor',
    phone: '0707-884201',
    email: 'maria@asklundamontessori.se',
  },
  {
    id: 0,
    name: 'Eva Kellheim',
    role: 'Biträdande rektor',
    phone: '0736-003483',
    email: 'eva.k@asklundamontessori.se',
  },
  {
    id: 0,
    name: 'Lina Jönsson',
    role: 'Administratör',
    phone: '0736-123883',
    email: 'lina@asklundamontessori.se',
  },
];

function Contact() {
  return (
    <Container className="section-margin">
      <Row>
        <Col className="text-center">
          <h1 className="display-4">Kontakt</h1>
          <p className="text-muted">
            Förskolans öppettider är Måndag – Fredag kl. 6:30 – 18:00
          </p>
          <h5>Välkomna att kontakta oss om ni har frågor.</h5>
        </Col>
      </Row>
      <Row className="text-center justify-content-around contact-person">
        {contactPerson.map((pers) => (
          <Col key={pers.id} lg={4} md={6} className="mt-5">
            <ContactCard person={pers} />
          </Col>
        ))}
      </Row>
      <Row className="my-5">
        <Col md={4} className="text-center my-auto">
          <h5>Kontoret är bemannat:</h5>

          <p>Måndag – Torsdag kl. 8.00 – 16.00.</p>
          <p>Fredag kl. 8.00 – 14.30</p>

          <p>Asklunda Montessoriförskola</p>
          <p>Norra Leden 1</p>
          <p>235 37 Vellinge</p>
        </Col>
        <Col md={8}>
          <MyGoogleMaps
            isMarkerShown={true}
            googleMapURL={
              'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'
            }
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={8} className="text-center mx-auto">
          <ListGroup variant="flush">
            <ListGroup.Item>Våra avdelningar: </ListGroup.Item>
            <ListGroup.Item>
              <strong>Björken</strong> telefon: 0709-66 77 71 e-post:
              bjorken@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Eken</strong> telefon: 0709-66 09 67 e-post:
              eken@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Granen</strong> telefon: 0709-66 08 95 e-post:
              granen@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Kastanjen</strong> telefon: 0709-66 08 69 e-post:
              kastanjen@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Lönnen</strong> telefon: 0736-12 56 11 e-post:
              lonnen@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Pilen</strong> telefon: 0736-12 37 12 e-post:
              pilen@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Rönnen</strong> telefon: 0736-12 38 37 e-post:
              ronnen@asklundamontessori.se
            </ListGroup.Item>

            <ListGroup.Item>
              <strong>Tallen</strong> telefon: 0709-66 41 16 e-post:
              tallen@asklundamontessori.se
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
