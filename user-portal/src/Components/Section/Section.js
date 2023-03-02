import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
function Section(props) {
    
  return (
    <div className='d-flex Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h2 className='Section-title ml-4'>{props.title}</h2>
      <div className='d-flex card-container'>
          {props.children}
      </div>
    
    </Card>
    </div>
  );
}

export default Section;