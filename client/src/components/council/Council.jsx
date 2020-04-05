import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Council() {
  return (
    <Container className="section-margin">
      <Row>
        <Col className="text-center">
          <h1 className="display-4">Verksamhetsråd</h1>

          <p>
            <strong>Inledning:</strong> Enligt Skollagen 2010:800 ska
            vårdnadshavare för barn i förskolan erbjudas möjlighet till
            inflytande över utbildningen. Det ska vid varje förskola finnas ett
            forum för samråd med vårdnadshavare.
          </p>

          <p>
            ”Vårdnadshavare har ansvaret för sina barns fostran och utveckling.
            Förskolan ska komplettera hemmet genom att skapa bästa möjliga
            förutsättningar för att varje barn ska kunna utvecklas rikt och
            mångsidigt. Förskolans arbete med barnen ska därför ske i ett nära
            och förtroendefullt samarbete med hemmen. Föräldrarna ska ha
            möjlighet att inom ramen för de nationella målen vara med och
            påverka verksamheten i förskolan. Att förskolan är tydlig i fråga om
            mål och innehåll är därför en förutsättning för barnens och
            föräldrarnas möjligheter till inflytande.” (ur Lpfö 98/10 kapitel 2
            §4)
          </p>

          <p>Förskolechefen ansvarar för att det finns forum för samråd.</p>

          <p>
            <strong>Syfte:</strong> Verksamhetsrådets syfte är att föräldrar,
            personal och förskolechef samlas för att diskutera övergripande
            frågor som rör verksamheten. Det är inget beslutande organ och inga
            diskussioner ska föras om individuella barn, föräldrar eller
            personal.
          </p>

          <p>
            <strong>Mål:</strong> Vårt mål är att en förälder från varje
            avdelning, en personal och förskolechefen ska ha verksamhetsråd 1-2
            ggr/termin.Som förälder i verksamhetsrådet väljs man för ett år i
            taget. Dagordning ska finnas och minnesanteckningar ska
            föras.Minnesanteckningar från verksamhetsråden ska alla i förskolan
            kunna ta del av.
          </p>

          <h4>Föräldrasamverkan</h4>

          <p>
            På Asklunda Montessoriförskola har vi olika former för samverkan. Vi
            tycker att det är viktigt med återkommande samtal om barnens
            utveckling likväl som att samtala om barnets trivsel på förskolan.
            Det bästa för barnen är då förskolan och föräldrar samverkar under
            öppenhet, ömsesidighet och respekt.
          </p>

          <h5 className="text-left">
            Asklunda Montessoriförskolas föräldrasamverkan:
          </h5>
          <ul className="text-left">
            <li>Inskolningstiden</li>
            <li>Verksamhetsråd 1- 2 ggr/termin</li>
            <li>Informationsmöte 1gg/år</li>
            <li>Föräldramöten ca 1 gg/år</li>
            <li>Utvecklingssamtal 1 gg/termin</li>
            <li>Föräldraenkät 1 gg/år</li>
            <li>”Föräldrafika/vernissage”</li>
            <li>Vid lämning och hämtning</li>
            <li>Övriga sammankomster vid festliga tillfällen</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Council;
