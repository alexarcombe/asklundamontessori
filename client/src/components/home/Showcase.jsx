import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faSeedling,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import './Showcase.css';

function Showcase() {
  return (
    <section id="showcase">
      <Carousel>
        <Carousel.Item className="carousel-image-1">
          <div className="dark-overlay">
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col className="text-center">
                  <h1 className="carousel-header">
                    Välkommen till Asklunda Montessoriförskola
                  </h1>
                  <p className="text-white">
                    En fristående förskola i Vellinge kommun
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-image-2">
          <div className="dark-overlay">
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col className="text-center">
                  <h1 className="carousel-header">VÅR PEDAGOGISKA VISION</h1>
                  <p className="text-white">
                    <FontAwesomeIcon icon={faSeedling} /> Med barnet i centrum i
                    vår unika miljö, sår vi frön för livet
                  </p>
                  <p className="text-white">
                    <FontAwesomeIcon icon={faGraduationCap} /> Tryggheten är
                    grunden för all positiv utveckling och inlärning
                  </p>
                  <p className="text-white">
                    <FontAwesomeIcon icon={faUsers} /> Varje barn ska få vara
                    sitt bästa jag utifrån sina förutsättningar
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item className="carousel-image-3">
          <div className="dark-overlay">
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col className="text-center">
                  <h1 className="carousel-header">VÅR VERKSAMHETSVISION</h1>
                  <p className="text-white">
                    Vi är en förskola som föräldrar väljer som sitt första val
                    till sina barn
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Showcase;
