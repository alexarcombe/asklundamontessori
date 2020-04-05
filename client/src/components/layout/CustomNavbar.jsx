import React, { useState } from 'react';
import { Row, Col, Navbar, Nav, Image, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import classnames from 'classnames';
import useWindowSize from '../../hooks/useWindowSize';

let toogleRef = '';

function onLinkClick() {
  toogleRef.click();
}

function CustomNavbar() {
  const [showVerksamhet, setShowVerksamhet] = useState(false);
  const [showHandlingsPlan, setShowHandlingsPlan] = useState(false);
  const [showOmOss, setShowOmOss] = useState(false);
  const [showBlanketter, setShowBlanketter] = useState(false);
  const { width } = useWindowSize();

  function onClick(e) {
    if (e.target.getAttribute('name') === 'verksamhet') {
      setShowVerksamhet(!showVerksamhet);
      setShowHandlingsPlan(false);
      setShowOmOss(false);
      setShowBlanketter(false);
    } else if (e.target.getAttribute('name') === 'handlingsplan') {
      setShowVerksamhet(false);
      setShowHandlingsPlan(!showHandlingsPlan);
      setShowOmOss(false);
      setShowBlanketter(false);
    } else if (e.target.getAttribute('name') === 'omoss') {
      setShowVerksamhet(false);
      setShowHandlingsPlan(false);
      setShowOmOss(!showOmOss);
      setShowBlanketter(false);
    } else if (e.target.getAttribute('name') === 'blanketter') {
      setShowVerksamhet(false);
      setShowHandlingsPlan(false);
      setShowOmOss(false);
      setShowBlanketter(!showBlanketter);
    }
  }
  return (
    <Navbar
      bg="dark"
      expand="true"
      fixed="top"
      variant="dark"
      className="bg-blue"
    >
      <LinkContainer to="/">
        <Image
          src="/images/logga.jpg"
          roundedCircle
          height={100}
          className="d-none d-sm-inline"
        />
      </LinkContainer>
      <div className="brand-container ml-3">
        <LinkContainer to="/">
          <Navbar.Brand>Asklundamontessori</Navbar.Brand>
        </LinkContainer>
        <p className="text-muted mb-0 d-none d-lg-block">
          "Med barnet i centrum i vår unika miljö, sår vi frön för livet." -
          Nytänkade Montessoriförskola
        </p>
      </div>

      <Button
        id="queue-button"
        variant="dark"
        size="lg"
        className="ml-auto mr-4 d-none d-sm-block"
      >
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=C3kBrfTRDEGHxRkqbTtlV82_q059WitGswxqNsLOpldUNjAyVjJYSzNITVBIVzdCTVBHNFA3OUFGViQlQCN0PWcu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Köanmälan
        </a>
      </Button>
      <Navbar.Toggle
        aria-controls="menu"
        ref={(input) => (toogleRef = input)}
      />
      <Navbar.Collapse id="menu">
        <Nav className="mt-2">
          <Row className="text-white text-center">
            <Col md={3}>
              <h5 name="verksamhet" onClick={onClick}>
                Verksamhet
              </h5>
              <CustomLink
                to="/normer"
                show={showVerksamhet}
                width={width}
                text="Normer &amp; Värden"
              />
              <CustomLink
                to="/council"
                show={showVerksamhet}
                width={width}
                text="Verksamhetsråd"
              />
              <CustomLink
                to="/values"
                show={showVerksamhet}
                width={width}
                text="Värdegrund"
              />
              <CustomLink
                to="/goals"
                show={showVerksamhet}
                width={width}
                text="Målsättning"
              />
              <CustomLink
                to="/quality"
                show={showVerksamhet}
                width={width}
                text="Systematiskt Kvalitetsarbete"
              />
              <CustomLink
                to="/mission"
                show={showVerksamhet}
                width={width}
                text="Uppdragsdokument"
              />
            </Col>
            <Col md={3}>
              <h5 name="handlingsplan" onClick={onClick}>
                Handlingsplan
              </h5>
              <CustomLink
                to="/sickcare"
                show={showHandlingsPlan}
                width={width}
                text="Vård Av Sjukt Barn"
              />
              <CustomLink
                to="/"
                show={showHandlingsPlan}
                width={width}
                text="Likabehandlingsplan"
              />
              <CustomLink
                to="/comments"
                show={showHandlingsPlan}
                width={width}
                text="Synpunkter &amp; Klagomål"
              />
              {/* <CustomLink
                to="/"
                show={showHandlingsPlan}
                width={width}
                text="Kök"
              /> */}
              <CustomLink
                to="/specialfood"
                show={showHandlingsPlan}
                width={width}
                text="Barn med Särskild Kost"
              />
              <CustomLink
                to="/"
                show={showHandlingsPlan}
                width={width}
                text="Matpolicy"
              />
            </Col>
            <Col md={3}>
              <h5 name="omoss" onClick={onClick}>
                Om Oss
              </h5>
              <CustomLink
                to="/pedagogik"
                show={showOmOss}
                width={width}
                text="Montessoripedagogik"
              />
              <CustomLink
                to="/departments"
                show={showOmOss}
                width={width}
                text="Avdelningar"
              />
              <CustomLink
                to="/personal"
                show={showOmOss}
                width={width}
                text="Personal"
              />
              <CustomLink
                to="/queue"
                show={showOmOss}
                width={width}
                text="Köinformation"
              />
              <CustomLink
                to="/gdpr"
                show={showOmOss}
                width={width}
                text="GDPR"
              />
              <CustomLink
                to="/contact"
                show={showOmOss}
                width={width}
                text="Kontakt"
              />
            </Col>
            <Col md={3}>
              <h5 name="blanketter" onClick={onClick}>
                Blanketter
              </h5>
              <CustomLink
                to="/"
                show={showBlanketter}
                width={width}
                text="Kränkande Behandling"
              />

              <a
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=C3kBrfTRDEGHxRkqbTtlV82_q059WitGswxqNsLOpldUNjAyVjJYSzNITVBIVzdCTVBHNFA3OUFGViQlQCN0PWcu"
                className={classnames('nav-link', {
                  'd-none': !showBlanketter && width < 768,
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Anmälningsblankett
              </a>

              <a
                href="https://asklundamontessori.s3.eu-north-1.amazonaws.com/Anma%CC%88lningsblankett-synpunkter-och-klagoma%CC%8Al-2018.docx"
                className={classnames('nav-link', {
                  'd-none': !showBlanketter && width < 768,
                })}
              >
                Synpunkter &amp; Klagomål
              </a>

              <a
                href="https://asklundamontessori.s3.eu-north-1.amazonaws.com/Blankett-fo%CC%88r-Barn-med-annan-kost-pa%CC%8A-Asklunda-Montessorifo%CC%88rskola.doc"
                className={classnames('nav-link', {
                  'd-none': !showBlanketter && width < 768,
                })}
              >
                Barn med Särskild Kost
              </a>
              <a
                href="https://asklundamontessori.s3.eu-north-1.amazonaws.com/Uppsa%CC%88gning-av-plats.doc"
                className={classnames('nav-link', {
                  'd-none': !showBlanketter && width < 768,
                })}
              >
                Uppsägning av plats
              </a>
            </Col>
          </Row>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function CustomLink(props) {
  const { to, show, width, text } = props;
  return (
    <LinkContainer exact to={to}>
      <Nav.Link
        onClick={onLinkClick}
        className={classnames({
          'd-none': !show && width < 768,
        })}
      >
        {text}
      </Nav.Link>
    </LinkContainer>
  );
}

export default CustomNavbar;
