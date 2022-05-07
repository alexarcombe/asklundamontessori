import React from 'react';
// import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  container: {
    display: 'flex',
  },
  left: {
    display: (media) => (media ? 'none' : 'block'),
    width: 'calc(50% - 15px)',
    marginRight: '15px',
    backgroundImage: 'url(/images/home/klassrum.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  right: {
    width: (media) => (media ? '100%' : '50%'),
    margin: '20px 5px',
  },
});

function Reason() {
  const media = useMediaQuery('(max-width:1200px)');
  const classes = useStyles(media);
  return (
    <div className={classes.container}>
      <div className={classes.left} />
      <div className={classes.right}>
        <h4 className="text-center my-3">Syftet med Montessoripedagogiken</h4>
        <ul>
          <li>Den tar tillvara barnets spontana lust för arbete</li>
          <li>
            Barnen har större möjlighet att utvecklas efter sina egna
            förutsättningar
          </li>
          <li>Barnen styr själv över sin kunskapsinlärning</li>
          <li>Tränar barnens självständighet</li>
        </ul>

        <h5 className="text-center">
          Pedagogiken och Materialet går hand i hand
        </h5>

        <ul>
          <li>Materialen bidrar till en lust att lära</li>
          <li>Materialen kan aldrig bli viktigare än barnen själva</li>
          <li>
            Materialet ska vara ett redskap på väg mot en större förståelse
          </li>
        </ul>

        <p className="text-center">
          Läs mer om <Link to="/pedagogik">Montessoripedagogiken</Link>
        </p>
      </div>
    </div>
  );
}

export default Reason;
