import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function GoalSection(props) {
  const { title, textList, imageRight, imageSrc } = props;
  const check = <FontAwesomeIcon icon={faCheck} className="mr-2" />;
  const items = textList.map((text) => (
    <li key={text}>
      {check} {text}
    </li>
  ));
  return (
    <Row>
      <Col
        md={6}
        className={classNames('py-2 my-auto', {
          'order-md-1': imageRight,
          'order-0': imageRight,
        })}
      >
        <Image src={imageSrc} roundedCircle fluid />
      </Col>
      <Col
        md={6}
        className={classNames('mt-2 my-md-auto ', {
          'order-md-0': imageRight,
          'order-1': imageRight,
        })}
      >
        <h4>{title}</h4>
        <p>Genom att...</p>
        <ul className="no-list-style pl-0">{items}</ul>
      </Col>
    </Row>
  );
}

GoalSection.propTypes = {
  title: PropTypes.string.isRequired,
  textList: PropTypes.string.isRequired,
  imageRight: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default GoalSection;
