import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Subsection from './Subsection';
function Section(props) {
        let arr = [{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 10000000000},{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 1000},{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 10000000000},{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 10000000000},{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 10000000000},{id:"Checking Account ********12334", number: 2, name:"College Fund", balance: 10000000000},]
  return (
    <div className='d-flex Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h2 className='Section-title ml-4'>{props.title}</h2>

          <Subsection CardArray={arr} SubsectionName={"Checking/Savings"}/>
      
        <Subsection CardArray={arr} SubsectionName={"Loans/Credit"}/>
    </Card>
    </div>
  );
}

export default Section;