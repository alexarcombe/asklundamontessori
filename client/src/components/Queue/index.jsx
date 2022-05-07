import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale } from '@fortawesome/free-solid-svg-icons';
import useScroll from '../../hooks/useScrollToTop';

function Queue() {
  useScroll();

  return (
    <Container className="section-margin">
      <Row>
        <Col md={10} className="text-center mx-auto">
          <h1 className="display-4">Köinformation</h1>
          <p className="text-muted">
            Rutiner för intagning av barn från kölista.
          </p>
          <div className="my-3">
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
            <FontAwesomeIcon className="mx-1" icon={faMale} size="7x" />
          </div>
          <p>
            Från och med den 1 januari 2016 har förskolan nya köregler som
            korresponderar till Vellinge kommuns köregler 1.
          </p>

          <p>
            De allmänna bestämmelserna om förskola i skollagen gäller även för
            fristående förskolor.
          </p>

          <p>
            Enligt 8 kapitlet 19 § skollagen anförs att om det inte finns plats
            för alla sökande till en förskoleenhet, ska urvalet göras på de
            grunder som den kommun där förskoleenheten är belägen godkänner.
          </p>

          <h5>
            Regler för för upptagning på kölista samt regler för intagning av
            barn från kölista
          </h5>

          <p>
            Förskolan har numera två kölistor där den ena avser barn som bor i
            Vellinge kommun (Kölista 1) och en för de barn som inte bor i
            Vellinge kommun (Kölista 2).
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5 className="text-center">Kölista 1 (Vellinge kommun)</h5>
          <p>
            För att kunna upptas till Kölista 1 skall barnet vara skrivet i
            Vellinge kommunen. Till denna lista kan även barn upptas vars
            föräldrar avser att flytta till Vellinge inom kötiden (skall kunna
            visas genom kopia på hyreskontrakt eller köpeavtal).
          </p>

          <ul>
            <li>
              Alla måste anmäla sina barn till kön och blir registrerad vid
              anmälan
            </li>
            <li>Barnen placeras efter anmälningsdatumet.</li>
          </ul>
          <p>Vid ledig plats på avdelningarna gäller följande:</p>
          <ol>
            <li>registrerad i kön</li>
            <li>syskonförtur</li>
            <li>datum vid registrering</li>
          </ol>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Kölista 2 (Andra kommuner)</h5>
          <ul>
            <li>
              Alla måste anmäla sina barn till kön och blir registrerad vid
              anmälan
            </li>
            <li>Barnen placeras efter anmälningsdatumet</li>
          </ul>
          <p>Vid ledig plats på avdelningarna gäller följande:</p>
          <ol>
            <li>kölista 1 måste vara tom</li>
            <li>registrerad i kön</li>
            <li>syskonförtur</li>
            <li>datum vid registrering</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>
            För att anmäla ditt barn fyll i detta
            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=C3kBrfTRDEGHxRkqbTtlV82_q059WitGswxqNsLOpldUNjAyVjJYSzNITVBIVzdCTVBHNFA3OUFGViQlQCN0PWcu"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' formulär'}
            </a>
            .
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Queue;
