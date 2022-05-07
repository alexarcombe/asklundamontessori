import React from 'react';
import { makeStyles } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  top: {
    width: '100%',
    margin: '5px 30px',
    textAlign: 'center',
  },
  left: {
    display: (media) => (media ? 'none' : 'block'),
    width: 'calc(50% - 15px)',
    marginRight: '15px',
    backgroundImage: 'url(/images/home/flicka.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  right: {
    width: (media) => (media ? '100%' : '50%'),
    padding: '0 15px',
  },
});

function FocusOnGoal() {
  const media = useMediaQuery('(max-width:1200px)');
  const classes = useStyles(media);

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h4>Fokus på MÅL</h4>
        <p className="font-italic">Barnen är i fokus i vår verksamhet!</p>
        <p>
          Vi erbjuder barnen trygghet och trivsel genom att bygga varma
          relationer med varje barn och en lugn stämning i barngruppen. Vår
          övertygelse är att barnen får bästa möjliga utveckling och lärande
          genom varierade material och aktiviteter. Genom att uppmuntra barnens
          fantasi och nyfikenhet skapar vi livsglädje och trivsel. Vi utgår från
          barnens individuella utvecklingsplaner och stimulerar barnen till att
          ta egna initiativ och ansvar, och stärker barnens förmåga att möta
          framtiden.
        </p>
      </div>
      <div className={classes.left} />
      <div className={classes.right}>
        <p className="text-center my-3">
          Vi strävar efter att vara goda förebilder för barnen och strävar efter
          att stärka barnens empatiska förmåga.
        </p>
        <p>Barnen ska:</p>
        <ul className="pl-3">
          <li>trivas och känna sig trygga</li>
          <li>
            stimuleras till utveckling och lärande utifrån sina förutsättningar
            och behov
          </li>
          <li>få det stöd och den hjälp som de behöver</li>
          <li>tycka att det är roligt att gå på förskolan</li>
          <li>utmanas i sin utveckling och sitt lärande</li>
          <li>
            ha inflytande över verksamheten genom att vi tar tillvara deras
            tankar och idéer
          </li>
          <li>lära sig att fungera i grupp</li>
          <li>ständigt utvecklas genom vår pedagogik och våra aktiviteter</li>
        </ul>
      </div>
    </div>
  );
}

export default FocusOnGoal;
