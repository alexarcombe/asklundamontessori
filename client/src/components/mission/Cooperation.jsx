import React from 'react';
import { Row, Col } from 'react-bootstrap';
function Cooperation() {
  return (
    <Row>
      <Col className="text-center">
        <h5>4. Samverkan med förskoleklass</h5>
        <p>
          Vi strävar efter att nå ett förtroendefullt samarbete med
          förskoleklassen för att stödja barnens allsidiga utveckling och
          lärande i ett långsiktigt perspektiv.
        </p>
        <p>
          <strong>Detta gör vi genom att:</strong>
        </p>
        <ul className="no-list-style">
          <li>
            - bygga upp ett samarbete och utbyta kunskaper och erfarenheter med
            personalen i
          </li>
          <li>
            – öka pedagogernas/föräldrarnas förtroende för varandra och få en
            gemensam förståelse och
          </li>
          <li>– uppmärksamma varje barns behov av stöd och stimulans</li>
          <li>
            – skapa kontinuitet vid byte av grupp och övergången till
            förskoleklass
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default Cooperation;
