import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PersonCard from './PersonCard';

function PersonalDepartments(props) {
  const { personal } = props;

  // Create a row for each department with personal in it
  return Object.keys(personal)
    .sort()
    .map((department) => {
      return (
        <Row
          key={department}
          id={department}
          className={`justify-content-around person-row mt-5 pt-2 border-top border-2`}
        >
          <Col className="col-12">
            <h1 className="display-4 text-center mb-5">
              {department === 'head' ? 'Administrativ' : department}
            </h1>
          </Col>
          {personal[department].map((pers) => (
            <Col key={pers.id} lg={3} md={4} sm={6} className="mb-5">
              <PersonCard person={pers} />
            </Col>
          ))}
        </Row>
      );
    });
}

PersonalDepartments.propTypes = {
  personal: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default PersonalDepartments;
