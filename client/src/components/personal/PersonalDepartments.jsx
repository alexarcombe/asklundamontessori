import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PersonCard from './PersonCard';

function PersonalDepartments(props) {
  const { personal } = props;
  const rows = { head: [] };
  let department;
  let pers;

  // Split personal into their department
  for (pers of personal) {
    department = pers.department;
    if (pers.role === 'Biträdande rektor') {
      rows.head[rows.head.length] = pers;
    }
    if (department === '') {
      rows.head[rows.head.length] = pers;
    } else if (!rows[pers.department]) {
      rows[pers.department] = [pers];
    } else {
      rows[pers.department][rows[pers.department].length] = pers;
    }
  }

  // Create a row for each department with personal in it
  return Object.keys(rows).map((department) => {
    return (
      <Row
        key={department}
        id={department}
        className={`justify-content-between person-row mt-5 pt-2 border-top border-2`}
      >
        <Col className="col-12">
          <h1 className="display-4 text-center mb-5">
            {department === 'head' ? 'Administrativ' : department}
          </h1>
        </Col>
        {rows[department].map((pers) => (
          <Col key={pers.id} lg={3} md={4} sm={6} className="mb-5">
            <PersonCard person={pers} />
          </Col>
        ))}
      </Row>
    );
  });
}

PersonalDepartments.propTypes = {
  personal: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PersonalDepartments;
