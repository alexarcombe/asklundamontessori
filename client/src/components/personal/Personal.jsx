import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Personal.css';
import PersonalDepartments from './PersonalDepartments';

const personal = [
  {
    id: 0,
    name: 'Maria Arcombe',
    role: 'Rektor',
    department: '',
    text:
      'Som Rektor vill jag se till allas välmående, dvs hela personalen men även barnen och föräldrarna. Har jobbat med barn i hela mitt liv och inget slår ett barns leende.',
  },
  {
    id: 1,
    name: 'Eva Kellheim',
    role: 'Biträdande rektor',
    department: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 2,
    name: 'Lina Jönsson',
    role: 'Administratör',
    department: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 3,
    name: 'Petra Löwegren',
    role: 'Kock',
    department: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 4,
    name: 'Carina Lövgren',
    role: 'Lokalvårdare',
    department: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 5,
    name: 'Saga Wernärsson',
    role: 'Poolvikarie',
    department: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 6,
    name: 'Hermon Semere Tsegai',
    role: 'Poolvikarie',
    department: '',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 7,
    name: 'Emelie Petersson',
    role: 'Barnskötare – Montessoripedagog',
    department: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 8,
    name: 'Helena Bratz',
    role: 'Barnskötare – Montessoripedagog',
    department: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 9,
    name: 'Jennifer Roth',
    role: 'Barnskötare – Montessoripedagog',
    department: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 10,
    name: 'Rebecca Borglin',
    role: 'Förskollärare',
    department: 'Björken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 11,
    name: 'Ingela Tengberg',
    role: 'Förskollärare – Montessoripedagog',
    department: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 12,
    name: 'Ulrika Andersson',
    role: 'Barnskötare',
    department: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 13,
    name: 'Anna Andersson',
    role: 'Förskoleassistent',
    department: 'Eken',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 14,
    name: 'Jessika Adelstam',
    role: 'Förskollärare',
    department: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 15,
    name: 'Linda Frid',
    role: 'Förskollärare – Studerar till Montessoripedagog',
    department: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 16,
    name: 'Sussi Karlsson',
    role: 'Barnskötare',
    department: 'Granen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 17,
    name: 'Dalina Gashi',
    role: 'Förskollärare – Montessoripedagog',
    department: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 18,
    name: 'Rebecca Ramqvist',
    role: 'Barnskötare',
    department: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 19,
    name: 'Sevgi Isovska',
    role: 'Barnskötare',
    department: 'Kastanjen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 20,
    name: 'Anna Quist',
    role: 'Barnskötare',
    department: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 21,
    name: 'Cimberly Nilsson',
    role: 'Förskollärare',
    department: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 22,
    name: 'Tove Sarvik',
    role: 'Barnskötare – Studerar till Montessoripedagog',
    department: 'Lönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 22,
    name: 'Carolina Hagelin',
    role: 'Barnskötare',
    department: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 23,
    name: 'Malin Bermheden',
    role: 'Barnskötare',
    department: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 24,
    name: 'Sofia Kókay',
    role: 'Förskollärare – Montessoripedagog',
    department: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 25,
    name: 'Matilda Löwegren',
    role: 'Förskoleassistent',
    department: 'Pilen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 26,
    name: 'Anna Karlsson',
    role: 'Förskollärare',
    department: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 27,
    name: 'Diana Svensson',
    role: 'Barnskötare',
    department: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 28,
    name: 'Petra Carlsson',
    role: 'Barnskötare',
    department: 'Rönnen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 29,
    name: 'Jannice Karlsson',
    role: 'Barnskötare – Studerar till Montessoripedagog',
    department: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 30,
    name: 'Therese Lundh',
    role: 'Förskollärare',
    department: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
  {
    id: 31,
    name: 'Ulrika Emanuelsson',
    role: 'Barnskötare',
    department: 'Tallen',
    text: 'Något kort som varje person skriver om sig själv',
  },
];

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
          <AnchorLink offset="120" href="#head">
            Administrativ
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Kastanjen">
            Kastanjen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Björken">
            Björken
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Eken">
            Eken
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Granen">
            Granen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Lönnen">
            Lönnen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Pilen">
            Pilen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Rönnen">
            Rönnen
          </AnchorLink>
        </Col>
        <Col className="text-center">
          <AnchorLink offset="120" href="#Tallen">
            Tallen
          </AnchorLink>
        </Col>
      </Row>
      <PersonalDepartments personal={personal} />
    </Container>
  );
}

export default Personal;
