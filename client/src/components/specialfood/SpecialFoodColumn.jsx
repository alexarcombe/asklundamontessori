import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

function SpecialFoodColumn(props) {
  const { image, title, textRows } = props;
  const text = textRows.map((t, index) => (
    <p key={index} className="mb-1">
      {t}
    </p>
  ));
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

SpecialFoodColumn.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textRows: PropTypes.string.isRequired,
};

export default SpecialFoodColumn;
