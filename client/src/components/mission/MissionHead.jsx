import React from 'react';
import { Row, Col } from 'react-bootstrap';

function MissionHead() {
  return (
    <>
      <Row>
        <Col className="display-4 text-center mb-3">
          <h1>Uppdragsdokument</h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={6}>
          <h5>Personalen ska arbeta efter:</h5>
          <ul className="no-list-style p-0">
            <li>styrdokument och värdegrund</li>
            <li>mål och riktlinjer för förskolan Lpfö 98/10</li>
            <li>montessoripedagogiken</li>
            <li>systematisk kvalitetsutveckling</li>
            <li>skollagen 2010:800</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>Personalen ska se till att:</h5>
          <ul className="no-list-style p-0">
            <li>förskolan lägger grunden för ett livslångt lärande</li>
            <li>förskolan ska vara rolig, trygg och lärorik för alla barn.</li>
            <li>
              erbjuda en god pedagogisk verksamhet, där omsorg, fostran och
              lärande för barnen bildar en helhet
            </li>
            <li>måluppfyllelse kontinuerligt följs upp och utvärderas</li>
            <li>vi känner ”vianda” och arbetsglädje</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>
            Personalen ska öka sin medvetenhet och få underlag till pedagogiska
            diskussioner, förändringar och utveckling av det egna arbetet.
          </p>
          <ul className="no-list-style p-0">
            <li>följa läroplanen för förskolan Lpfö98/10</li>
            <li>följa Montessoripedagogiken</li>
            <li>följa skollagen 2010:800</li>
            <li>följa våra Styrdokument och Uppdrag</li>
            <li>personalkonferenser</li>
            <li>avdelningsmöten</li>
            <li>månadsmöten</li>
            <li>individuell planering</li>
            <li>kompetensutbildning</li>
            <li>studiedagar</li>
            <li>kick off</li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
export default MissionHead;
