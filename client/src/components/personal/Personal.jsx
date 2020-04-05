import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Personal.css';

const personal = [
  {
    id: 0,
    name: 'Maria Arcombe',
    role: 'Rektor',
    avdelning: '',
    text:
      'Som Rektor vill jag se till allas välmående, dvs hela personalen men även barnen och föräldrarna. Har jobbat med barn i hela mitt liv och inget slår ett barns leende.',
  },
  {
    id: 1,
    name: 'Eva Kellheim',
    role: 'Biträdande rektor',
    avdelning: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 2,
    name: 'Lina Jönsson',
    role: 'Administratör',
    avdelning: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 3,
    name: 'Petra Löwegren',
    role: 'Kock',
    avdelning: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 4,
    name: 'Carina Lövgren',
    role: 'Lokalvårdare',
    avdelning: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 5,
    name: 'Saga Wernärsson',
    role: 'Poolvikarie',
    avdelning: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 6,
    name: 'Hermon Semere Tsegai',
    role: 'Poolvikarie',
    avdelning: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 7,
    name: 'Emelie Petersson',
    role: 'Barnskötare – Montessoripedagog',
    avdelning: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 8,
    name: 'Helena Bratz',
    role: 'Barnskötare – Montessoripedagog',
    avdelning: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 9,
    name: 'Jennifer Roth',
    role: 'Barnskötare – Montessoripedagog',
    avdelning: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 10,
    name: 'Rebecca Borglin',
    role: 'Förskollärare',
    avdelning: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 11,
    name: 'Ingela Tengberg',
    role: 'Förskollärare – Montessoripedagog',
    avdelning: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 12,
    name: 'Ulrika Andersson',
    role: 'Barnskötare',
    avdelning: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 13,
    name: 'Anna Andersson',
    role: 'Förskoleassistent',
    avdelning: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 14,
    name: 'Jessika Adelstam',
    role: 'Förskollärare',
    avdelning: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 15,
    name: 'Linda Frid',
    role: 'Förskollärare – Studerar till Montessoripedagog',
    avdelning: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 16,
    name: 'Sussi Karlsson',
    role: 'Barnskötare',
    avdelning: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 17,
    name: 'Dalina Gashi',
    role: 'Förskollärare – Montessoripedagog',
    avdelning: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 18,
    name: 'Rebecca Ramqvist',
    role: 'Barnskötare',
    avdelning: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 19,
    name: 'Sevgi Isovska',
    role: 'Barnskötare',
    avdelning: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 20,
    name: 'Anna Quist',
    role: 'Barnskötare',
    avdelning: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 21,
    name: 'Cimberly Nilsson',
    role: 'Förskollärare',
    avdelning: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 22,
    name: 'Tove Sarvik',
    role: 'Barnskötare – Studerar till Montessoripedagog',
    avdelning: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 22,
    name: 'Carolina Hagelin',
    role: 'Barnskötare',
    avdelning: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 23,
    name: 'Malin Bermheden',
    role: 'Barnskötare',
    avdelning: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 24,
    name: 'Sofia Kókay',
    role: 'Förskollärare – Montessoripedagog',
    avdelning: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 25,
    name: 'Matilda Löwegren',
    role: 'Förskoleassistent',
    avdelning: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 26,
    name: 'Anna Karlsson',
    role: 'Förskollärare',
    avdelning: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 27,
    name: 'Diana Svensson',
    role: 'Barnskötare',
    avdelning: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 28,
    name: 'Petra Carlsson',
    role: 'Barnskötare',
    avdelning: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 29,
    name: 'Jannice Karlsson',
    role: 'Barnskötare – Studerar till Montessoripedagog',
    avdelning: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 30,
    name: 'Therese Lundh',
    role: 'Förskollärare',
    avdelning: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 31,
    name: 'Ulrika Emanuelsson',
    role: 'Barnskötare',
    avdelning: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
];

function PersonalRows() {
  const rows = { head: [] };
  let avdelning;
  let pers;

  for (pers of personal) {
    avdelning = pers.avdelning;
    if (pers.role === 'Biträdande rektor') {
      rows.head[rows.head.length] = pers;
    }
    if (avdelning === '') {
      rows.head[rows.head.length] = pers;
    } else if (!rows[pers.avdelning]) {
      rows[pers.avdelning] = [pers];
    } else {
      rows[pers.avdelning][rows[pers.avdelning].length] = pers;
    }
  }

  return Object.keys(rows).map((avdelning) => {
    return (
      <Row
        key={avdelning}
        id={avdelning}
        className={`justify-content-between person-row mt-5 pt-2 border-top border-2`}
      >
        <Col className="col-12">
          <h1 className="display-4 text-center mb-5">
            {avdelning === 'head' ? 'Administrativ' : avdelning}
          </h1>
        </Col>
        {rows[avdelning].map((pers) => (
          <Col key={pers.id} lg={3} md={4} sm={6} className="mb-5">
            <Card>
              <Card.Body className="text-center">
                <Image
                  src="/images/example.jpg"
                  roundedCircle
                  fluid
                  className="w-75"
                />
                <Card.Title>{pers.name}</Card.Title>
                <Card.Text className="text-muted">{pers.role}</Card.Text>
                <Card.Text>{pers.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  });
}

function Personal() {
  return (
    <Container id="personal-section" className="section-margin">
      <Row>
        <Col md={10} className="mx-auto">
          <h1 className="display-4 text-center">Personal</h1>
          <p className="text-muted text-center">
            En av de viktigaste kvalitetsaspekterna på Asklunda
            Montessoriförskola är personalen.
          </p>
          <p className="text-center">Våra grundvärderingar:</p>
          <ul>
            <li>
              All personal ska ha en positiv människosyn, visa respekt och vara
              lyhörda för allas behov i verksamheten.
            </li>
            <li>
              Hela vår verksamhet ska bygga på hög kompetens och serviceanda.
            </li>
            <li>Tydlig fördelning av ansvar och befogenheter.</li>
            <li>
              Arbetsmiljön ska präglas av en tillåtande attityd. Det ska finnas
              utrymme för utveckling och egna initiativ för att stimulera
              ständig förnyelse och kvalitetsutveckling. Kommunikationen ska
              vara öppen och rak.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-around">
        <Col className="text-center">
          <AnchorLink offset="114" href="#head">
            Administrativ
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Kastanjen">
            Kastanjen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Björken">
            Björken
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Eken">
            Eken
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Granen">
            Granen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Lönnen">
            Lönnen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Pilen">
            Pilen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Rönnen">
            Rönnen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="114" href="#Tallen">
            Tallen
          </AnchorLink>
        </Col>
      </Row>
      <PersonalRows />
    </Container>
  );
}

export default Personal;
