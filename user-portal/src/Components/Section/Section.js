import { React, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Subsection from './Subsection';
function Section(props) {

        
        const [AccountArray, setAccountArray] = useState([
  {
    "id": 1677682,
    "userId": 1,
    "accountTypeName": "checking",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677683,
    "userId": 1,
    "accountTypeName": "checking",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677684,
    "userId": 1,
    "accountTypeName": "checking",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677685,
    "userId": 1,
    "accountTypeName": "checking",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677686,
    "userId": 1,
    "accountTypeName": "checking",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677687,
    "userId": 1,
    "accountTypeName": "credit",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  },{
    "id": 1677688,
    "userId": 1,
    "accountTypeName": "loans",
    "accountTypeDescription": "account for general spending purposes",
    "balance": 1000.00,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "College Fund",
    "createdDate": 1677683776994
  }
]
)
const [CheckingSavingsArr, setCheckingSavingsArr]= useState([])
const [CreditLoanssArr, setCreditLoansArr]= useState([])
  const filterAccounts =(Array)=>{

      const checksave =[]
      const creditLoan =[]
      for(const ele in Array){
        if(Array[ele].accountTypeName=="checking"|| Array[ele].accountTypeName=="savings"){
          checksave.push(Array[ele])
        }
        else if(Array[ele].accountTypeName=="loans"|| Array[ele].accountTypeName=="credit"){
            creditLoan.push(Array[ele])
        }
      }
      setCheckingSavingsArr(checksave);
      setCreditLoansArr(creditLoan);
  }
  

        //   call api for all Accounts associated with this user
        // const loadAccounts = async ()=>{
        //   let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
        //   let response = await fetch('http://localhost:3001/user/{1}/accounts', {headers})
        //   let data = response.json();
        //   setAccountArray(data);

        // }
        useEffect(
          // ()=> loadAccounts()
          ()=>filterAccounts(AccountArray),[AccountArray]
        )
        
        return (
    <div className='d-flex  Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h1 className='Section-title ml-4'>{props.title}</h1>
        <div className='Subsections-container mx-5'>
           <Subsection CardArray={CheckingSavingsArr} SubsectionName={"Checking/Savings"}/>
           <Subsection CardArray={CreditLoanssArr} SubsectionName={"Loans/Credit"}/> 
        </div>
        
    </Card>
    </div>
  );
}

export default Section;