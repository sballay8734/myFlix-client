import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const UserInfo = ({ user }) => {

  return (
    <Row className='d-flex flex-column flex-lg-row mt-3 mb-4 text-center'>
      <Col>
        <span>Username: </span>
        <span className='fw-bolder'>{user.username}</span>
      </Col>
      <Col>
        <span>Email: </span>
        <span className='fw-bolder'>{user.email}</span>
      </Col>
      <Col>
        <span>Birthday: </span>
        <span className='fw-bolder'>{user.birthDate}</span>
      </Col>
    </Row>
  );
};