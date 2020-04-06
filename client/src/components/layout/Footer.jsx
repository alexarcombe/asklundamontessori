import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark mt-5">
      <Container className="pt-4">
        <Row>
          <Col md={4} className="text-center">
            <h4 className="mb-4">Snabblänkar</h4>
            <Link to="/gdpr" className="footer-links">
              GDPR
            </Link>
            <Link to="/goals" className="footer-links">
              Målsättning
            </Link>
            <Link to="/departments" className="footer-links">
              Avdelningar
            </Link>
            <Link to="/personal" className="footer-links">
              Personal
            </Link>
            <Link to="/queue" className="footer-links">
              Köinformation
            </Link>
          </Col>
          <Col md={4} className="text-center">
            <h4 className="mb-4">Kontakt</h4>
            <p className="text-white">Asklunda Montessoriförskola</p>
            <p className="text-white">Norra Leden 1</p>
            <p className="text-white">235 37 Vellinge</p>
            <p className="text-white">Tel: 040 - 42 48 89</p>
            <p className="text-white">Mail: info@asklundamontessori.se</p>
          </Col>
          <Col md={4} className="text-center">
            <h4 className="mb-4">Följ oss</h4>
            <div className="d-block mb-4">
              <a
                href="https://www.facebook.com/asklundamontessori/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="3x"
                  className="facebook"
                />
              </a>
            </div>
            <div className="d-block mb-4">
              <a
                href="https://www.instagram.com/asklunda_montessoriforskola/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="3x"
                  className="instagram rounded"
                />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center copyright">
            <p>
              Copyright &copy; {year} Asklunda Montessori Förskola, all rights
              reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
