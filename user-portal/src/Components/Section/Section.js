import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Subsection from './Subsection';
function Section(props) {

        
        const [AccountArray, setAccountArray] = useState([
  {
    "id": 5,
    "userId": 1,
    "accountTypeId": {name:"Checking"},
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  }
]
)

        //   call api for all Accounts associated with this user
        // const loadAccounts = async ()=>{
        //   let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
        //   let response = await fetch('http://localhost:3001/user/{1}/accounts', {headers})
        //   let data = response.json();
        //   setAccountArray(data);

        // }
        // useEffect(
        //   ()=> loadAccounts()
        // )
        
        return (
    <div className='d-flex  Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h1 className='Section-title ml-4'>{props.title}</h1>
        <div className='Subsections-container mx-5'>
           <Subsection CardArray={AccountArray} SubsectionName={"Checking/Savings"}/>
      
        <Subsection CardArray={AccountArray} SubsectionName={"Loans/Credit"}/> 
        </div>
        
    </Card>
    </div>
  );
}

export default Section;