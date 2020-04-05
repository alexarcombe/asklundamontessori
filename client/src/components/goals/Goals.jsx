import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GoalSection from './GoalSection';

function Goals() {
  return (
    <Container className="section-margin">
      <h1 className="display-4 text-center">Målsättning</h1>
      <GoalSection
        imageSrc="/images/goals/trygghet.jpg"
        imageRight={false}
        title="Tryggheten är grunden för all positiv utveckling och inlärning"
        textList={[
          'ge en trygg inskolning',
          'bemöta barnet med kärlek, omtanke, hänsyn och respekt',
          'ha en fast struktur och en väl planerad dag med meningsfull sysselsättning',
          'ha konsekventa regler',
          'personalen känner arbetsglädje',
        ]}
      />
      <GoalSection
        imageSrc="/images/goals/forutsattningar.jpg"
        imageRight={true}
        title="Hänsyn skall tas till barnens olika förutsättningar och behov"
        textList={[
          'barnet får utvecklas i sin egen takt i en för dem anpassad miljö',
          'stimulera varje barns nyfikenhet och vilja att lära',
        ]}
      />
      <GoalSection
        imageSrc="/images/goals/empati.jpg"
        imageRight={false}
        title="Främja att barnens förmåga till empati och omtanke om andra utvecklas"
        textList={[
          'barnen utvecklar medvetenhet om sig själv och sin omgivning',
          'barnen utvecklar sin förmåga att fungera enskilt och i grupp, att hantera konflikter och förstå rättigheter och skyldigheter',
          'vi som vuxna fungerar som en förebild för barnen',
        ]}
      />
      <GoalSection
        imageSrc="/images/goals/sjalvstandiga.jpg"
        imageRight={true}
        title="Utveckla barnen till lugna, självständiga och harmoniska människor"
        textList={[
          'de känner arbetsglädje som stimulerar koncentrationsförmågan',
          'personalen ej avbryter eller hjälper dem i onödan',
          'de får träna att ta egna beslut och ta konsekvenserna av dessa',
          'de får skaffa egna erfarenheter med uppmuntran och stöd från personalen',
        ]}
      />
      <Row>
        <Col className="text-center mt-3">
          <h2>Arbete = Lek</h2>
          <p className="text-muted">
            ”Där det finns barn måste det också finnas plats för lek och bus”
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Goals;
