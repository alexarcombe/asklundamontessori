import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Personal.css';
import PersonalDepartments from './PersonalDepartments';

function Personal() {
  const [personal, setPersonal] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://hxxwvdzf3i.execute-api.eu-north-1.amazonaws.com/Prod/')
      .then((res) => {
        const data = res.data.Items;

        console.log(data);
        const rows = { Administration: [] };
        let department;
        let pers;

        // Split personal into their department
        for (pers of data) {
          department = pers.department;
          if (pers.role === 'Biträdande rektor') {
            rows.Administration[rows.Administration.length] = pers;
          }

          if (!rows[department]) {
            rows[department] = [pers];
          } else {
            rows[department][rows[department].length] = pers;
          }
        }

        setPersonal(rows);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          Object.keys(personal)
            .sort()
            .map((dep) => (
              <Col key={dep} className="text-center">
                <AnchorLink offset="120" href={`#${dep}`}>
                  {dep}
                </AnchorLink>
              </Col>
            ))
        )}
      </Row>
      <PersonalDepartments personal={personal} />
    </Container>
  );
}

export default Personal;
