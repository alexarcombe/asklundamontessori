import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function NewThinking() {
  return (
    <Container>
      <Row>
        <Col
          md={10}
          className="text-center mx-auto mt-4 pb-4 border-bottom border-2"
        >
          <h1 className="display-4">Nytänkande Montessoriförskola</h1>
          <p>
            Montessoripedagogik är en pedagogik som har sin grund i Maria
            Montessoris observationer av barn. Maria Montessori utvecklade sin
            pedagogik under början av 1900-talet. Det är viktigt att följa med i
            nutiden. Vi arbetar efter förskolans läroplan Lpfö98/18 men vår
            profil är Montessoripedagogik Vi fångar upp de viktiga bitarna vad
            forskningen säger om barns utveckling och lärande och väver in det i
            vår profil.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default NewThinking;
