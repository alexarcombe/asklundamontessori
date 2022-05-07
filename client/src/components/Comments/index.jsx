import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useScroll from '../../hooks/useScrollToTop';

export default function Comments() {
  useScroll();

  return (
    <Container className="section-margin">
      <Row>
        <Col md={10} className="mx-auto text-center">
          <h1 className="display-4  mb-3">Synpunkter och Klagomål</h1>
          <h4>Handlingsplan för synpunkter/klagomål, rutiner och åtgärder</h4>
          <p className="text-muted">
            För att kunna driva en förskola med hög kvalitet är det viktigt att
            det finns klara och tydliga rutiner samt regler för vad som gäller
            för förskolan i olika situationer.
          </p>
          <p className="text-muted">
            Om man som förälder inte känner sig nöjd eller tillfredsställd med
            något i verksamheten och har synpunkter eller klagomål finns rutiner
            nerskrivna.
          </p>
          <h5>Bolagets syfte</h5>
          <p>
            Aktiebolaget Montessori Vellinge Grundskola syfte är att bedriva en
            förskola med Maria Montessoris filosofi och pedagogik samt följa
            Förskolans Läroplanen 98/16
          </p>
          <h5>Insatser för föräldrar på Asklunda Montessoriförskola</h5>

          <p>Ha intresse och ta del av Montessorifilosofin och pedagogiken</p>
          <p>
            Ta del av informationen, rutiner, handlingsplaner och regler som
            gäller för förskolan.
          </p>
          <p>Verka för ett positivt klimat och följa förskolan syfte och mål</p>
          <h5>
            Insatser för Asklunda Montessoriförskola samt Montessori Vellinge
            Grundskola AB
          </h5>
          <p>Arbeta efter Montessorifilosofin och pedagogiken.</p>
          <p>Följa de riktlinjer och regler enligt skollagen.</p>
          <p>Följa läroplanen för förskolan Lpfö 98/16.</p>
          <p>Ha tydliga Handlingsplaner som ligger på vår hemsida.</p>
          <p>
            Tillgodose barnen en säker och trygg miljö samt hålla en hög
            kvalitet på den pedagogiska verksamheten enligt
          </p>
          <p>Montessorifilosofin och Läroplanen.</p>
          <p>Verka för en god samverkan med föräldrarna.</p>
          <h5>Rutiner för föräldrar som har synpunkter eller klagomål:</h5>
          <p>1. kontakta personal på avdelningen som är aktuell</p>
          <p>2. kontakta förskolechefen</p>
          <p>
            3. fyll i blankett för synpunkter/ klagomål och lämna till kontoret
          </p>
          <h5>Åtgärdsplan från förskolan:</h5>
          <p>
            1. personal/ansvarig har tagit emot ett klagomål/klagomålsblankett
          </p>
          <p>2. försök lösa det med vederbörande på bästa sätt</p>
          <p>
            3. vid problem kontaktas förskolechefen om det inte går att lösa
          </p>
          <p>
            4. förskolechef ska i sin tur kontakta vederbörande och försöka lösa
            problemet
          </p>
        </Col>
      </Row>
    </Container>
  );
}
