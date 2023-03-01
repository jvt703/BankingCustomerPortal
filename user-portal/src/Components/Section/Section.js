import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
function Section(props) {
  return (
    <div className='d-flex justify-content-center'>
    <Card className='m-2 w-75'>
    <Container className='vh-100 '>
      <h2 className='Section-title ml-4'>{props.title}</h2>
      <Row>
        <Col>
          {props.children}
        </Col>
      </Row>
    </Container>
    </Card>
    </div>
  );
}

export default Section;