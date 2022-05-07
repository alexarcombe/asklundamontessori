import React from 'react';
// import { makeStyles } from '@material-ui/styles';
import { Modal } from 'react-bootstrap';

// const useStyles = makeStyles({
//   container: {
//     width: '200px',
//     height: '200px',
//     backgroundColor: 'white',
//     display: 'block',
//   },
// });

function CustomModal(props) {
  const { show, handleClose, children } = props;
  // const classes = useStyles();

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered={true}>
      {children}
    </Modal>
  );
}

export default CustomModal;
