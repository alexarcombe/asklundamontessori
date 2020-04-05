import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function SpecialFood() {
  return (
    <Container className="section-margin">
      <Row>
        <Col className="text-center">
          <h1 className="display-4">Barn med särskild kost</h1>
          <p className="text-muted">
            Handlingsplan för barn med special kost/allergier på Asklunda
            Montessoriförskola
          </p>
          <p>
            Alla människor är lika mycket värda. I första hand är det
            omständigheterna runt människan som ska förändras när det uppstår
            problem – inte människan själv.
          </p>

          <p>
            Alla barn har inte en bekymmersfri relation till maten. Allergi- och
            överkänslighetsbesvär är vanligt på svenska förskolor. För att
            undvika problem är det viktigt att föräldrarna involverar förskolan
            i matvalet. Förskolepersonalen/kokerskan ska tillsammans med
            föräldrarna ta fram en fungerande mat hantering.
          </p>

          <p>
            I förskolan är det vanligt med barn som av olika skäl behöver
            specialmat. Bland de minsta handlar det oftast om
            livsmedelsallergier. Dessa försvinner ofta när barnen blir äldre.
          </p>

          <h4>Ingen ska av misstag utsättas för livsmedel man inte tål</h4>
          <p>
            Personer som är mat allergiker skall garanteras en säker kost vid de
            måltider som serveras på förskolan. Förskolans inköp av livsmedel
            skall ske med målsättning att de är ”rena” och inte innehåller
            onödiga tillsatser.
          </p>
        </Col>
      </Row>
      <SpecialFoodColumn
        image="allergi"
        title="Vad är mat allergi?"
        textRows={[
          'Mat allergi/födoämnesallergi är en allergisk reaktion – man reagerar mot något i kosten som man är överkänslig för. Det är lätt att förväxla det med livsmedelsintolerans. I båda fallen får man symptom när man äter ett bestämt livsmedel, men det är två olika saker.',
          'Det är väldigt ovanligt att man är allergisk mot mat, men många låter bli att äta saker som de felaktigt tror att de är överkänsliga mot. Därför är det viktigt att få en riktig diagnos om man tror att man själv eller ens barn är allergisk mot något livsmedel. Kosten bör studeras systematiskt av läkare/dietist eller en specialist på allergiska sjukdomar.',
        ]}
      />
      <SpecialFoodColumn
        image="gluten"
        title="Glutenintolerans (Glutenallergi)"
        textRows={[
          'Gluten är ett protein som finns i vanliga sädesslag vete, korn, råg och även i liten mängd i havre och kan skada slemhinnan i tarmen, så att näringsupptaget försämras. Barnet blir kinkigt, får lösa eller hårda avföringar, minskar i vikt. Glutenintolerans påvisas i blodprov och genom prov från tarmslemhinnan.',
          'Behandlingen består i att hålla sig till strikt glutenfri kost.',
        ]}
      />
      <SpecialFoodColumn
        image="nuts"
        title="Nötallergiker"
        textRows={[
          'För de barn som har nöt allergi får ingen förekomst av nötter, jordnötter och mandel i mat/livsmedel som serveras inom förskolan finnas.',
          'Livsmedel som kan orsaka hastiga allergireaktioner med fara för livet',
          'Nötter, Jordnötter, Soja, Mjölk, Fisk, Skaldjur',
        ]}
      />
      <SpecialFoodColumn
        image="cow"
        title="Komjölksallergi"
        textRows={[
          'Till barn som inte tål komjölksprotein måste maten vara helt fri från mjölk och mjölkprodukter. I stället för mjölk används då mjölkersättning, som kan förskrivas på livsmedelsanvisning. Personal som förväntas hantera en komjölksfri kost måste få en noggrann genomgång om vad de skall vara observanta på.',
          'Symptom är oftast måttliga men kan i sällsynta fall bli svårartade. Det vanliga är att de flesta barn växer ifrån sin överkänslighet när de kommer upp i 2-3 års ålder.',
        ]}
      />
      <SpecialFoodColumn
        image="milk"
        title="Laktosintolerans"
        textRows={[
          'Det är vanligt att komjölksallergi förväxlas med laktosintolerans som är begränsad till överkänslighet för mjölksocker på grund av en oförmåga att bryta ner detta. Det underlättar mycket om det kan fastställas vilken typ av mjölköverkänslighet det rör sig om.',
          'Besvär vid laktosintolerans är beroende av hur stor mängd mjölksocker som barnen äter. De flesta tål mindre mängder mjölk.',
          'I allmänhet tolereras yoghurt, Dofilus och Bifilus bättre beroende på att det i dessa produkter finns bakteriestammar som bildar laktas.',
          'Helt laktosfri mat är det endast ett fåtal barn som kräver.',
        ]}
      />
      <Row className="mt-3">
        <Col md={6}>
          <h5 className="text-center">
            Utmärkande för överkänslighet för komjölksprotein
          </h5>
          <ul>
            <li>Tål överhuvud taget inte någon mat som innehåller mjölk.</li>
            <li>
              Svår kost eftersom mjölk ingår i många hel- och halvfabrikat.
            </li>
            <li>I sällsynta fall livshotande reaktioner.</li>
          </ul>
        </Col>
        <Col>
          <h5 className="text-center">
            Utmärkande för överkänslighet för laktos
          </h5>
          <ul>
            <li>
              Tål mindre mängder mjölk i maten, hur mycket varierar från barn
              till barn.
            </li>
            <li>Lagrad hårdost går bra.</li>
            <li>
              Smör och margarin innehåller så små mängder laktos att det oftast
              kan ätas.
            </li>
            <li>Ger obehagliga magproblem, men ej livshotande.</li>
          </ul>
        </Col>
      </Row>

      <Row className="my-5 text-center">
        <Col>
          <h4>
            Vi på Asklunda Montessoriförskola vill trygga situationen för barn,
            vårdnadshavare och personal genom tydliga insatser, rutiner,
            åtgärder och dokumentation.
          </h4>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h5 className="text-center">
            Insatser för vårdnadshavare och förskolan
          </h5>
          <ul>
            <li>
              Vårdnadshavarna ska lämna information om barnets
              specialkost/allergi samt intyg från läkare/dietist/BVC.
            </li>
            <li>
              Vårdnadshavarna ska lämna information/skriva en lista över vad
              barnet kan äta eller inte.
            </li>
            <li>
              Förskolan ska försöka anpassa specialmat så att den avviker så
              lite som möjligt från de övriga barnens mat.
            </li>
            <li>
              Förskolan ska inte glömma bort dem som äter specialmat när det är
              kalas eller fest.
            </li>
            <li>
              Förskolan ska ta reda på hur barnet kan reagera om det av misstag
              får i sig av den mat det ej tål, vad har hänt tidigare?
            </li>
            <li>
              Förskolan ska ha en säker kosthantering genom goda rutiner där all
              personal som tillreder och/eller serverar maten på förskolan ska
              ha kunskaper om barnets allergikost och specialkost.
            </li>
            <li>
              Vid nyanställning av personal ska information och upplysning om
              gällande rutiner alltid ges.
            </li>
            <li>
              Vid särskilda aktiviteter inom förskolan ska man i god tid
              informera vårdnadshavarna till barn med särskild kost, när det
              gäller t ex studiebesök/besök, utflykter, jippon m.m. Alla barn
              ska kunna delta i förskolans roliga aktiviteter. Vem ska kontaktas
              vid en akut födoämnesreaktion?
            </li>
            <li>
              Skapa kontaktnät mellan förskolorna för att bistå varandra i
              arbetet med specialmat.
            </li>
            <li>
              Kontrollera med vårdnadshavarna årligen om det är motiverat att
              fortsätta en diet.
            </li>
          </ul>
        </Col>
        <Col md={6}>
          <h5 className="text-center">Rutiner från förskolan</h5>
          <ul>
            <li>
              En särskild utvald person samt kökspersonal ska ansvara för att
              inhämta information om barnets mat överkänslighet.
            </li>
            <li>
              Behandla informationen och vidarebefordra till berörda, alla ska
              ha vetskap om informationen, dock har en huvudansvaret.
            </li>
            <li>
              Tydliga specialkostlistor ska finnas väl synliga för de barn det
              gäller
            </li>
            <li>
              Dessa barn ska alltid serveras först innan någon annan får mat.
              Detta gäller i alla situationer då det serveras något att förtära
              vid alla måltider, kalas, utflykter m.m.
            </li>
            <li>
              En skriftlig åtgärdsplan ska finnas för vad som ska göras om
              barnet av misstag får i sig fel mat och utvecklar en allergisk
              reaktion. (se åtgärdsplan)
            </li>
            <li>
              Tillbudsrapportering till ansvarig personal på avdelningen samt
              förskolechef, oavsett följderna.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

function SpecialFoodColumn(props) {
  const { image, title, textRows } = props;
  const text = textRows.map((t) => <p className="mb-1"> {t} </p>);
  return (
    <Row className="text-center">
      <Col lg={4} className="p-0 my-lg-0 my-3">
        <Image src={`/images/specialfood/${image}.jpg`} fluid />
      </Col>
      <Col lg={8} className="my-auto">
        <h4>{title}</h4>
        {text}
      </Col>
    </Row>
  );
}

export default SpecialFood;
