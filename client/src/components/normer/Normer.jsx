import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Normer() {
  return (
    <Container>
      <Row>
        <Col md={6} className="offset-md-3 mb-3">
          <Image src="/images/normer/normerochvärden.jpg" fluid />
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h1 className="display-4">Normer &amp; Värden</h1>
          <p className="text-muted">
            Förskolan ska aktivt och medvetet påverka och stimulera barnen att
            utveckla förståelse för vårt samhälles gemensamma demokratiska
            värderingar.
          </p>
          <h4 className="mt-3">Inledning:</h4>
          <p>
            Asklunda ska återspegla de grundläggande demokratiska värderingar
            som gäller på förskolan och i samhället.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5 className="text-center">Mål</h5>
          <ul>
            <li>Alla ska visa hänsyn och respektera varandra</li>
            <li>Vi ska tillsammans vårda och ta ansvar för vår miljö</li>
            <li>
              Nolltolerans mot mobbing och kränkning, se likabehandlingsplanen
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Syfte</h5>
          <ul>
            <li>
              Att få en trygg miljö där alla kan känna sig trygga och trivas
            </li>
            <li>Alla ska aktivt delta i ett demokratiskt arbetssätt</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 text-center mb-3">
          <h4>Förväntansdokument utifrån vår värdegrund</h4>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Föräldrar</h5>
          <p className="text-muted text-center">
            Som föräldrar till barn på Asklunda Montessori förskola förväntar vi
            oss följande:
          </p>
          <ul>
            <li>att ni tar till er Montessoripedagogiken och dess tankesätt</li>
            <li>
              att ni visar intresse för barnets behov och utveckling och är
              beredda att vid behov träna och utveckla era barn
            </li>
            <li>
              att ni visar positiv inställning till förskolan och samarbetar med
              oss
            </li>
            <li>
              att ni tar till er den information som vi delger er samt ställer
              upp på de möten som arrangeras
            </li>
            <li>att ni inte lämnar era barn på förskolan när de är sjuka</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Personal</h5>
          <p className="text-muted text-center">
            Som förälder kan ni förvänta Er följande av oss personal:
          </p>
          <ul>
            <li>att vi följer Montessoripedagogiken och dess tankesätt</li>
            <li>att vi följer Läroplanen Lpfö98/16</li>
            <li>att vi är goda förebilder och tydliga vuxna</li>
            <li>att vi har nolltolerans mot mobbing och kränkning</li>
            <li>att vi har ett gott samarbete</li>
            <li>att ni får information om ert barn och verksamheten</li>
            <li>att vi kontaktar er vid speciella behov</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Barn</h5>
          <p className="text-muted text-center">
            Som personal förväntar vi oss av Er barn följande:
          </p>
          <ul>
            <li>att du är en bra kamrat och bemöter alla med respekt</li>
            <li>att du följer förskolans trivsel och ordningsregler</li>
            <li>att du strävar efter självständighet</li>
          </ul>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Personal</h5>
          <p className="text-muted text-center">
            Som barn kan ni förvänta Er följande av oss personal:
          </p>
          <ul>
            <li>att ni får god omsorg och utbildning</li>
            <li>
              att ni får utvecklas efter era egna behov och förutsättningar
            </li>
            <li>att ni blir respekterad, sedda och hörda</li>
            <li>
              att vi stöttar er i självständighetssträvan med en förberedd miljö
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Normer;
