import React from 'react';
import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap';

const avdelningar = [
  {
    id: 0,
    name: 'Asken 1',
    epost: 'asken1@asklundamontessori.se',
    imageURL: '/images/department/asken1.jpg',
    funfact: 'something about asken',
  },
  {
    id: 1,
    name: 'Asken 2',
    epost: 'asken2@asklundamontessori.se',
    imageURL: '/images/department/asken2.jpg',
    funfact: 'something about asken',
  },
  {
    id: 2,
    name: 'Björken',
    telefon: '0709-66 77 71',
    epost: 'bjorken@asklundamontessori.se',
    imageURL: '/images/department/birch.jpg',
    funfact:
      'Visste du att: Björken är vårt vanligaste lövträd. Det vi kallar för vanlig björk är egentligen två arter, vårtbjörk och glasbjörk, men de är så lika att vi oftast inte skiljer på dem. På våren kan man tappa björksaven och dricka som en läskande dryck.',
  },

  {
    id: 3,
    name: 'Eken',
    telefon: '0709-66 09 67',
    epost: 'eken@asklundamontessori.se',
    imageURL: '/images/department/oak.jpg',
    funfact:
      'Visste du att: Eken är vårt största träd. Fristående ekar kan bli väldigt tjocka. Rumskullaeken i Småland är 13 meter i omkrets. En mängd växt- och djurarter trivs på eller i eken. Minst 1500 olika arter av svampar, lavar, mossor, insekter etc. är beroende av detta träd.',
  },

  {
    id: 4,
    name: 'Granen',
    telefon: '0709-66 08 95',
    epost: 'granen@asklundamontessori.se',
    imageURL: '/images/department/fir.jpg',
    funfact:
      'Visste du att: Granen är det vanligaste trädet för taltrasten att bygga bo i. Det ska helst vara täta unggranar och boet byggs oftast på 1-3 meters höjd, nästan alltid vid stammen. Fina grangrenar ingår också som byggnadsmaterial i boets yttre delar för att ge stadga åt konstruktionen.',
  },

  {
    id: 5,
    name: 'Kastanjen',
    telefon: '0709-66 08 69',
    epost: 'kastanjen@asklundamontessori.se',
    imageURL: '/images/department/chestnut.jpg',
    funfact:
      'Visste du att: Hästkastanjen är ett högt och ståtligt träd som blommar i början av juni med vita, doftande blomklasar. Mörkgröna, stora flikiga blad. På hösten pryds hästkastanjen av stora, runda och taggiga kapslar',
  },

  {
    id: 6,
    name: 'Lönnen',
    telefon: '0736-12 56 11',
    epost: 'lonnen@asklundamontessori.se',
    imageURL: '/images/department/maple.jpg',
    funfact:
      'Visste du att: I Sverige finns två naturligt förekommande arter av lönn: skogslönn och naverlönn. Den införda sykomorlönnen odlas också som skogsträd i södra Sverige.',
  },

  {
    id: 7,
    name: 'Pilen',
    telefon: '0736-12 37 12',
    epost: 'pilen@asklundamontessori.se',
    imageURL: '/images/department/willow.jpg',
    funfact:
      'Visste du att: Videsläktet eller pilsläktet är ett släkte i familjen videväxter, och växer som träd, buskar, ris eller örtlika dvärgbuskar. Träden i släktet kallas normalt pilträd, medan de mer buskliknande arterna oftast kallas vide. Annars brukar pilar kallas de arter som har blomning och lövsprickning samtidigt, medan arter som blommar på bar kvist kallas vide.',
  },

  {
    id: 8,
    name: 'Rönnen',
    telefon: '0736-12 38 37',
    epost: 'ronnen@asklundamontessori.se',
    imageURL: '/images/department/rowan.jpg',
    funfact:
      'Visste du att: Rönnen är ett av våra mest spridda lövträd som växer från Skåne upp till trädgränsen i norr. Inte minst uppskattas rönnen av fåglar som gärna äter de sura rönnbären och på så sätt sprider fröna. Det är inte ovanligt att det växer rönnar i grenklykor på stora träd. Flogrönnar, som de kallades, förknippades förr i tiden med magiska krafter.',
  },

  {
    id: 9,
    name: 'Tallen',
    telefon: '0709-66 41 16',
    epost: 'tallen@asklundamontessori.se',
    imageURL: '/images/department/pine.jpg',
    funfact:
      'Tallen är ett av landets barrträd. Barren är trädets blad och de är gröna eftersom de innehåller klorofyll. Tallens frön bildas i kottar. Fröna är omtyckta som mat av bl.a. större korsnäbb, större hackspett och ekorrar. Genom att bära med sig kottarna och tappa en del frön kan de också hjälpa tallen att sprida sig.',
  },
];

function Departments() {
  return (
    <Container className="section-margin">
      <Row>
        <Col>
          <h1 className="display-4 text-center">Våra Avdelningar</h1>
          <p className="text-muted text-center">
            På Asklundamontessori har vi 8 olika avdelningar, dessa är:
          </p>
        </Col>
      </Row>
      <Row className="mb-5">
        <CardGroup className="justify-content-around">
          <GetDepartmentsNoText departments={avdelningar} />
        </CardGroup>
      </Row>
      <Row>
        <GetDepartments departments={avdelningar} />
      </Row>
    </Container>
  );
}

function GetDepartmentsNoText(props) {
  const { departments } = props;
  return departments.map((dep) => (
    <Col lg={3} sm={6}>
      <Card>
        <Card.Img variant="top" src={dep.imageURL} />
        <Card.Body>
          <Card.Title>{dep.name}</Card.Title>
          <Card.Text>Bara kort</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
}

function GetDepartments(props) {
  const { departments } = props;
  return departments.map((dep) => (
    <Col key={dep.id} lg={3} sm={6}>
      <Card>
        <Card.Img variant="top" src={dep.imageURL} />
        <Card.Body>
          <Card.Title>{dep.name}</Card.Title>
          <Card.Text>{dep.funfact}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));
}

export default Departments;
