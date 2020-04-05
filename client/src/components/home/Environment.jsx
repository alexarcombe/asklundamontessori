import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Environment() {
  return (
    <Container>
      <Row className="py-5 border-bottom border-2">
        <Col md={6} className="order-0 order-md-1 my-auto">
          <Image src="/images/home/hylla.jpg" rounded fluid />
        </Col>

        <Col md={6} className="order-1 order-md-0 my-auto">
          <h4 className="text-center my-3">Vår unika lärmiljö</h4>
          <p className="text-muted">
            Miljön har effekt på barnets utveckling. Vi förbereder vår unika
            lärmiljö med olika tekniker, metoder och material. Syftet med vår
            förberedda miljö är att:
          </p>
          <ul>
            <li>barnet ska ha en plats där de kan utföra saker på egen hand</li>
            <li>där var sak står på sin plats</li>
            <li>och allt är i barnens höjd</li>
          </ul>

          <h5>Vår miljö är</h5>

          <ul className="no-list-style pl-3">
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className="mt-1" />
              <p className="ml-2 mb-0">
                Harmonisk och stressfri för att skapa en rofylld och lugn miljö
                för alla
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className="mt-1" />
              <p className="ml-2 mb-0">
                Våra ögon tycker om lugna färger och därför lägger vi fokus på
                att få en estetisk tilltalande och vacker miljö. Vår inredning
                och det material som barnen arbetar med ska vara giftfria
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className="mt-1" />
              <p className="ml-2 mb-0">
                Alla lärmiljöer omkring barnen ska vara utvecklande och fånga
                barnens lust för lärande och nyfikenhet.
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className="mt-1" />
              <p className="ml-2 mb-0">
                Barn som vistas i en miljö som är inbjudande, med färger,
                mönster, material och annat tilltalande, underlättar lärandet
                och gör det mer intressant och roligare. Barn har en vilja att
                lära är sig mer om barnet har roligt när de lär sig.
              </p>
            </li>
            <li className="d-flex mb-3">
              <FontAwesomeIcon icon={faCheck} className="mt-1" />
              <p className="ml-2 mb-0">
                För att få arbetsro har vi tydliga trivselregler där Respekt för
                andra genomsyras i hela vårt{' '}
                <Link to="/values">värdegrundsarbete</Link>.
              </p>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
