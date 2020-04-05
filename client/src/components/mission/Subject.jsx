import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function Subject(props) {
  const { title, textList, offer } = props;
  return (
    <Card>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{offer}</Card.Text>
        <Card.Text>
          <ul className="no-list-style">
            {textList.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Subject.propTypes = {
  title: PropTypes.string.isRequired,
  textList: PropTypes.arrayOf(PropTypes.string).isRequired,
  offer: PropTypes.string,
};

Subject.defaultProps = {
  offer: 'Vi erbjuder varje barn:',
};

export default Subject;
