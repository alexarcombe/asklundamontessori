import React from 'react';
import { Row, Col, CardColumns } from 'react-bootstrap';
import Subject from './Subject';

const subjects = [
  {
    title: 'Inskolning:',
    offer: 'Vi erbjuder varje barn och föräldrar:',
    textList: [
      '– ett välkomstbrev med information och inskolningstider',
      '– såväl före som under inskolningen, information och inblick i hur vår förskola fungerar.',
      '– ett lugnt och positivt sätt att bli en del av barngruppen',
      'Vi anpassar barnets inskolningstider beroende på ålder och tidigare erfarenhet av förskolevistelse.',
    ],
  },
  {
    title: 'Lämning/hämtning:',
    offer: 'Vi erbjuder varje barn och föräldrar:',
    textList: [
      '– en fungerande kommunikation och fasta rutiner',
      '– personal som möter upp',
    ],
  },
  {
    title: 'Föräldramöte:',
    offer: 'Vi erbjuder varje föräldrar:',
    textList: [
      '– möjlighet att träffas utan barn för att bekanta sig med personal, lokaler samt med varandra.',
      '– information angående verksamheten',
    ],
  },
  {
    title: 'Utvecklingssamtal',
    offer: 'Vi erbjuder varje föräldrar:',
    textList: [
      '– utvecklingssamtal 2 gånger/år eller fler vid behov.',
      '– att genom utvecklingssamtal synliggöra och dokumentera varje barns trivsel, utveckling och lärande.',
    ],
  },
];
function Preschool() {
  return (
    <Row>
      <Col className="text-center">
        <h5>3. Förskola och hem</h5>
        <p>
          Föräldrar har ansvaret för sina barns fostran och utveckling.
          Förskolan ska komplettera hemmet genom att skapa bästa förutsättningar
          för varje barn. Vi ska vara tydliga i fråga om mål och innehåll för
          att ge bästa förutsättningar för barnens och föräldrarnas möjligheter
          till inflytande. Genom föräldraråd ge föräldrar möjlighet att känna
          sig delaktiga, känna att de kan ha inflytande och kunna påverka
          verksamheten inom ramarna för de nationella målen
        </p>
        <p>
          <strong>Vi erbjuder varje barn och föräldrar:</strong>
        </p>
        <CardColumns className="text-left">
          {subjects.map((subject) => (
            <Subject
              key={subject.title}
              title={subject.title}
              offer={subject.offer}
              textList={subject.textList}
            />
          ))}
        </CardColumns>
        <Row>
          <Col md={6}>
            <p>
              <strong>Dokumentation</strong>
            </p>

            <p>
              Vi erbjuder varje föräldrar tillgång till vårt
              dokumentationsverktyg ”Pluttra”. Som föräldrar har man tillgång
              till ”ett digitalt fönster”, dvs. att man i nutid kommer att kunna
              ta del av barnets dag på förskolan och av pedagogernas reflektion
              kring förskolans pedagogiska arbete.
            </p>

            <p>
              Pluttra är vårt pedagogiska dokumentationsverktyg i det
              systematiska kvalitetsarbetet. Med Pluttra synliggör pedagogerna
              barnens lärande här och nu genom att använda foto, film och text.
              Detta ger förutsättningar för ett strukturerat systematiskt
              kvalitetsarbete och är kopplat till Lpfö 98/16. All vår
              dokumentation samt kommunikation dokumenteras i Pluttra om barnets
              utveckling och lärande samt vad som händer i verksamheten t.ex.
              föräldramöten, utflykter, arrangemang mm.
            </p>

            <p>
              Säkerheten i Pluttra är hög, allt som förskolan publicerar ägs av
              förskolan och är osökbart.
            </p>
          </Col>
          <Col md={6}>
            <p>
              <strong>Föräldramedverkan</strong>
            </p>
            <p>
              Vi vill ha ett väl fungerande samarbete och engagemang från
              föräldrarna.
            </p>
            <ul className="no-list-style p-0">
              <li>
                – Genom årliga enkäter har föräldrarna också möjlighet att
                påverka den pedagogiska verksamheten.
              </li>
              <li>
                – Genom att personal, föräldrar och barn träffas under trevliga
                former stärker vi vårt samarbete.
              </li>
              <li>
                – Genom vårt föräldraverksamhetsråd träffas vi för att främja
                samarbetet och skapa en plattform dit man som förälder kan vända
                sig med sina tankar och idéer.
              </li>
              <li>
                – Det finns alltid möjligheter att komma med synpunkter på vår
                verksamhet både positiva som negativa. Genom vår blankett
                Handlingsplan för synpunkter och klagomål kan man som förälder
                använda den och skicka in enligt våra rutiner.
              </li>
              <li>
                – Vi kommer att utforma möjligheter för föräldrarna att vara
                delaktiga i förskolans utvärderingar och förbättringar samt
                möjlighet att delta i förskolans kvalitetsarbete.
              </li>
              <li>
                – Ni som föräldrar ska även få möjlighet att vara delaktiga i
                era barns utveckling och lärande.
              </li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Preschool;
