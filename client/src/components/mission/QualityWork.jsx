import React from 'react';
import { Row, Col } from 'react-bootstrap';
function QualityWork() {
  return (
    <Row>
      <Col className="text-center">
        <h5>5. Systematiskt Kvalitets Arbete</h5>
        <p>
          Vår verksamhet ska kontinuerligt och systematiskt dokumenteras, följas
          upp, utvärderas och utvecklas genom vårt Systematiska kvalitetsarbete.
        </p>
        <p>
          Varje barns utveckling och lärande ska följas genom observation,
          dokumentation och analys så att varje barn ges bästa möjliga
          förutsättningar för utveckling och lärande. All form av utvärdering
          ska utgå från ett tydligt barnperspektiv.
        </p>
        <p>
          <strong>Personalen ska utveckla:</strong>
        </p>
        <ul className="no-list-style">
          <li>
            – arbetsprocesser i den dagliga verksamheten, det vill säga
            observation, kartläggning, planering, genomförande och dokumentation
          </li>
          <li>– arbeta mot måluppfyllelse enligt läroplanen</li>
          <li>– arbeta mot mål enligt montessoripedagogiken</li>
          <li>
            – vilka åtgärder som behöver vidtas för att en kvalitetsutveckling
            ska ske
          </li>
          <li>
            – fortlöpande samtal med föräldrar och att de ska vara delaktiga i
            sina barns utveckling och lärande
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default QualityWork;
