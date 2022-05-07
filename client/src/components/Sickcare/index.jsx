import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import useScroll from '../../hooks/useScrollToTop';

function SickCare() {
  useScroll();

  return (
    <Container className="section-margin">
      <Row>
        <Col>
          <h1 className="display-4 text-center">Vård av Sjukt Barn</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6} className="order-0 order-md-1 mb-3">
          <Image src="/images/sickcare/sick-child.jpg" fluid rounded />
        </Col>
        <Col md={6} className="order-1 order-md-0 text-center my-auto">
          <h5>Vilka regler gäller när barnen blir sjuka:</h5>
          <p className="text-muted">
            Smittsamma sjukdomar är den vanligaste orsaken till att barn inte
            kan vara i förskolan.
          </p>
          <p>
            De vanligaste smittsamma sjukdomarna hos små barn är förkylningar,
            kräkningar, diarréer, ögoninflammation och öroninflammation som går
            över på ganska kort tid.
          </p>
          <p>
            Mycket talar för att det är bra för barnens hälsa om de undviker
            antibiotika vid okomplicerade (virusorsakade) luftvägsinfektioner.
          </p>
          <p>
            Andra smittsamma sjukdomar kan ge allvarliga konsekvenser och måste
            behandlas av läkare.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-center">
          <h5>Som småbarnsföräldrar måste man vara medveten om att:</h5>

          <p>8-10 förkylningar/år hos de små förskolebarnen (1-3 år)</p>

          <p>4-6 förkylningar/år hos de äldre förskolebarnen (4-5 år)</p>
          <p>
            Under förkylningssäsongen oktober-april är det vanligt med 2
            förkylningar/månaden.
          </p>

          <p>
            Vi vill på Asklunda arbeta med barn som är fria från smittsamma
            sjukdomar i vår dagliga verksamhet.
          </p>
          <p>
            Vi vill med denna skrift ge praktiska råd och riktlinjer om vad som
            gäller i förskolan om barnen blir sjuka/får smittsamma sjukdomar.
          </p>
        </Col>
      </Row>
      <Row className="border-top border-2 pt-4">
        <Col className="col-lg-8 offset-lg-2 text-center">
          <h3>Barn som är sjuka ska vara hemma i lugn och ro</h3>
          <h4>Rutiner:</h4>
          <ListGroup variant="flush">
            <ListGroup.Item>
              1. Personalen ringer efter vårdnadshavare vid upptäckt av att
              barnets allmän tillstånd inte är bra som tex har feber, diarré,
              kräkningar, ögoninflammation eller andra smittsamma sjukdomar
            </ListGroup.Item>
            <ListGroup.Item>
              2. Vårdnadshavaren ska efter samtal från personalen snarast komma
              och hämta barnet.
            </ListGroup.Item>
            <ListGroup.Item>
              3. Vid diarré/magsjuka eller kräkning ska syskon också gå hem med
              det sjuka barnet samt stanna hemma under sjukdomstiden.
            </ListGroup.Item>
            <ListGroup.Item>
              4. Meddela förskolans mobil när barnet ska återkomma till
              verksamheten.
            </ListGroup.Item>
          </ListGroup>
          <p className="font-italic mt-2">
            Kom ihåg: det är alltid för barnets bästa, när vi ringer och ber Er
            komma och hämta Ert sjuka barn före dagens slut.
          </p>
        </Col>
      </Row>
      <Row className="border-top border-2 pt-4 justify-content-around">
        <Col className="col-12 mb-4">
          <h4 className="text-center">
            Stanna hemma eller gå tillbaka till förskolan?
          </h4>
        </Col>
        <Col lg={4} md={6}>
          <h5 className="text-center">Stanna hemma?</h5>
          <ul className="pl-3">
            <li>
              Barnets allmäntillstånd avgör – barnet skall orka deltaga i alla
              de vardagliga aktiviteterna, såväl inne som ute.
            </li>
            <li>Barn med feber – även lindrig.</li>
            <li>Barn med hosta som håller barnet vaket hela nätterna.</li>
            <li>
              Barn som kräks och /eller har diarréer. Gäller även när ev. syskon
              har magsjuka/ kräks.
            </li>
            <li>
              Barn som har ögoninflammation får inte komma tillbaka förrän ögat
              är helt torrt från varig vätska.
            </li>
          </ul>
        </Col>
        <Col lg={4} md={6}>
          <h5 className="text-center">När komma tillbaka till förskolan?</h5>
          <ul className="pl-3">
            <li>
              Med ett gott allmäntillstånd menas att barnet ska vara feberfritt
              och orka delta i förskolans alla aktiviteter, så även
              utomhusvistelse.
            </li>
            <li>Ett feberfritt dygn hemma är en tumregel.</li>
            <li>
              Vid antibiotikabehandling bör barnet i regel vara hemma minst 2
              dygn.
            </li>
            <li>
              Vid magsjuka/kräkning ska barnet vara hemma 2 dygn/48 h efter det
              att de är friska för att inte smitta andra.
            </li>
          </ul>
        </Col>
        <Col lg={4} md={6}>
          <h5 className="text-center">
            Definition av respekt för att stanna hemma med sjukt barn:
          </h5>

          <p>
            <strong>Respekt</strong> för det sjuka barnet.
          </p>
          <p>
            <strong>Respekt</strong> för personal och övriga barn som blir
            smittade i barngruppen.
          </p>
          <p>
            <strong>Respekt</strong> för personalen som måste ta hand om det
            sjuka barnet.
          </p>
          <p>
            <strong>Respekt</strong> för de föräldrar som håller sina sjuka barn
            hemma och kommer tillbaka med dem friska för att sen vara hemma med
            sjukt barn igen som blivit smittat.
          </p>
        </Col>
      </Row>
      <Row className="border-top border-2 pt-4 text-center justify-content-around">
        <Col className="col-12 mb-4">
          <h4>Hur vi aggerar på forskolan</h4>
        </Col>
        <Col lg={4} md={6} className="order-0 order-md-2 order-lg-0">
          <h5>Medicinering av barn av personal på förskolan:</h5>
          <p>
            Observera att personal inom förskolan som regel inte får ge
            receptbelagda läkemedel såsom antibiotika eller Alvedon m.m. Om
            speciella/akuta behov finns att barnet måste medicineras under sin
            vistelsetid på förskolan ska samtal föras med personal på barnets
            avdelning. Efter överenskommelse fylls en blankett i. Blankett
            ”Egenvård” finns att få av personalen på resp. avdelning. Ansvaret
            vid medicinering ligger alltid hos föräldrarna. För att undvika att
            medicinering sköts av personal, vänligen rådgör med läkare om
            möjlighet finns att få morgon och kväll.
          </p>

          <p>
            I Smittskydd Skånes broschyr på Vellinge kommuns hemsida kan ni få
            mer information om ” När ditt barn blir sjukt” under Barn och
            Utbildning, Regler, Sjukt barn. www.vellinge.se
          </p>
        </Col>
        <Col lg={4} md={6} className="order-1 order-md-0 order-lg-1">
          <h5>Hygienrutiner:</h5>
          <p>
            Vid många fall av barn som är sjuka höjer vi våra städrutiner:
            Toaletterna/skötrum städas extra noga. Leksaker och textilier
            tvättas.
          </p>
          <p>
            Barnen får sina händer spritade inför varje måltid efter de tvättat
            händerna. Ingen mat serveras från borden.
          </p>
        </Col>
        <Col lg={4} md={6} className="order-2 order-md-1 order-lg-2">
          <h5>Information från kontoret:</h5>
          <p>Kontoret går ut med mail till alla föräldrar:</p>
          <p>
            – om många barn är sjuka på samma avdelning eller på hela förskolan{' '}
          </p>
          <p>– vid många fall av maginfluensa</p>
          <p>– vid många fall av ögoninflammation</p>
          <p>– vid många fall av huvudlöss</p>
          <p>Maria Arcombe Förskolechef Vellinge den 1 januari 2018</p>
        </Col>
      </Row>
    </Container>
  );
}

export default SickCare;
