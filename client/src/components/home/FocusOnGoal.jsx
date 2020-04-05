import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function FocusOnGoal() {
  return (
    <Container>
      <Row className="mt-5 mb-4">
        <Col md={10} className="mx-auto text-center">
          <h4>Fokus på MÅL</h4>
          <p className="font-italic">Barnen är i fokus i vår verksamhet!</p>
          <p>
            Vi erbjuder barnen trygghet och trivsel genom att bygga varma
            relationer med varje barn och en lugn stämning i barngruppen. Vår
            övertygelse är att barnen får bästa möjliga utveckling och lärande
            genom varierade material och aktiviteter. Genom att uppmuntra
            barnens fantasi och nyfikenhet skapar vi livsglädje och trivsel. Vi
            utgår från barnens individuella utvecklingsplaner och stimulerar
            barnen till att ta egna initiativ och ansvar, och stärker barnens
            förmåga att möta framtiden.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="my-auto">
          <Image src="/images/home/flicka.jpg" rounded fluid />
        </Col>
        <Col md={6}>
          <p className="text-center my-3">
            Vi strävar efter att vara goda förebilder för barnen och strävar
            efter att stärka barnens empatiska förmåga.
          </p>
          <p>Barnen ska:</p>
          <ul className="pl-3">
            <li>trivas och känna sig trygga</li>
            <li>
              stimuleras till utveckling och lärande utifrån sina
              förutsättningar och behov
            </li>
            <li>få det stöd och den hjälp som de behöver</li>
            <li>tycka att det är roligt att gå på förskolan</li>
            <li>utmanas i sin utveckling och sitt lärande</li>
            <li>
              ha inflytande över verksamheten genom att vi tar tillvara deras
              tankar och idéer
            </li>
            <li>lära sig att fungera i grupp</li>
            <li>ständigt utvecklas genom vår pedagogik och våra aktiviteter</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default FocusOnGoal;
