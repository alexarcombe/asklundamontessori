import React from 'react';
import { Row, Col, CardColumns } from 'react-bootstrap';
import Subject from './Subject';

const subjects = [
  {
    title: 'Språk',
    textList: [
      '– förmåga att lyssna och reflektera',
      '– intresse för symboler och skriftspråk',
      '– talspråk, ordförråd och begrepp',
      '– förmåga att kommunicera, argumentera och berätta',
    ],
  },

  {
    title: 'Matematik',
    textList: [
      '– intresse och lust för matematik',
      '– förståelse för rum, form, läge, riktning, mängder, antal, ordning, mätning och tid',
      '– förmåga att uttrycka och använda matematiska begrepp',
    ],
  },
  {
    title: 'Natur och teknik',
    textList: [
      '– intresse för naturvetenskap',
      '– barns förståelse och respekt för allt levande och vår miljö',
      '– intresse för hur enkel teknik fungerar',
      '– förmåga att bygga, skapa och konstruera med hjälp av olika tekniker, material och redskap',
    ],
  },
  {
    title: 'Rörelse',
    textList: ['– motorik, koordinationsförmåga och kroppsuppfattning'],
  },
  {
    title: 'Skapande',
    textList: [
      '– skapande förmåga genom lek, bild, rörelse, sång och musik, dans, drama och att använda sina olika sinnen',
    ],
  },
  {
    title: 'Sång och musik',
    textList: [
      '–   ett rikt utbud av sång, musik och sånglekar',
      '–   att de ska känna glädje och lust att sjunga, spela och lyssna på olika typer av musik.',
    ],
  },
  {
    title: 'Av- och påklädning',
    textList: [
      '- utveckla deras förmåga att lära sig klä av och på sig själv i sin egen takt',
      '- ”All onödig hjälp är ett hinder i barnets utveckling”',
    ],
  },
  {
    title: 'Utevistelse',
    textList: [
      '– daglig utevistelse och få möjlighet till lek och andra aktiviteter',
      '– att träna den sociala utvecklingen och minska infektionsrisken',
      '– möjligheter till motorisk träning genom att erbjuda en stimulerande utemiljö',
      '– såväl fri lek som organiserad lek där den sociala utvecklingen tränas',
    ],
  },
  {
    title: 'Måltider',
    textList: [
      '– hemlagad och näringsrik kost som tillagas av utbildad personal',
      '– en lugn och trevlig samvaro vid måltiderna',
      '– att få ett bra bordsskick',
      '– fasta rutiner och harmonisk miljö där vi skapar en trygg och lustfylld måltid',
    ],
  },
  {
    title: 'Modersmålsstöd',
    textList: ['– att utveckla sin kulturella identitet'],
  },
];

export default function Development() {
  return (
    <Row>
      <Col className="text-center">
        <h5>1. Utveckling och lärande</h5>
        <p className="text-muted">
          I vår förberedda miljö erbjuder vi barnen en utvecklande och lärorik
          förskola där omvårdnad, omsorg, fostran och lärande bildar en helhet.
          Vi stimulerar, främjar och utmanar barnens utveckling och lärande.
        </p>
        <p>
          Asklunda Montessoriförskola följer läroplanen för förskola Lpfö98/2010
          och Montessoripedagogiken:
        </p>
        <Row className="justify-content-center">
          <Col lg={10}>
            <ul className="no-list-style pl-3">
              <li>
                - Barn har en unik förmåga till inlärning. Genom att arbeta med
                montessorimaterial inom områdena
              </li>
              <li>
                - Praktiskt, sensoriskt, språk, matematik och kultur, får barnen
                kunskaper och erfarenheter.
              </li>
              <li>- Barn lär sig med hela kroppen</li>
              <li>- Motoriskt, emotionellt, socialt och intellektuellt</li>
              <li>
                - och måste få utvecklas på alla plan för att kunna bli väl
                fungerande människor.
              </li>
              <li>
                - Vi uppmärksammar varje barns utveckling och behov. Varje barn
                arbetar i sin egen takt på den utvecklingsnivå de befinner sig.
              </li>
            </ul>
          </Col>
        </Row>
        <CardColumns className="text-left">
          {subjects.map((subject) => (
            <Subject
              key={subject.title}
              title={subject.title}
              textList={subject.textList}
            />
          ))}
        </CardColumns>
      </Col>
    </Row>
  );
}
