import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Mission.css';
import MissionHead from './MissionHead';
import Development from './Development';
import Influence from './Influence';
import Preschool from './Preschool';
import Cooperation from './Cooperation';
import QualityWork from './QualityWork';
import useScroll from '../../hooks/useScrollToTop';

function Mission() {
  useScroll();

  return (
    <Container className="section-margin">
      <MissionHead />
      <Row>
        <Col className="text-center mb-4">
          <h4>Asklunda Montessoriförskolas Uppdrag</h4>
        </Col>
      </Row>
      <Development />
      <Influence />
      <Preschool />
      <Cooperation />
      <QualityWork />
    </Container>
  );
}

export default Mission;
