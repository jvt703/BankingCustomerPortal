import React, { useEffect, useState } from "react";
import Subsection from "../Section/Subsection";


const AccountsDisplay =()=>{

    
        const [AccountArray, setAccountArray] = useState([
          {
            id: 1677682,
            userId: 1,
            accountTypeName: "checking",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677683,
            userId: 1,
            accountTypeName: "checking",
            accountTypeDescription: "account for general spending purposes",
            balance: 10000000000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677684,
            userId: 1,
            accountTypeName: "checking",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677685,
            userId: 1,
            accountTypeName: "checking",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677686,
            userId: 1,
            accountTypeName: "checking",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677687,
            userId: 1,
            accountTypeName: "credit",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
          {
            id: 1677688,
            userId: 1,
            accountTypeName: "loans",
            accountTypeDescription: "account for general spending purposes",
            balance: 1000.0,
            confirmation: false,
            active: true,
            pointsBalance: 0,
            accountName: "College Fund",
            createdDate: 1677683776994,
          },
        ]);
const [CheckingSavingsArr, setCheckingSavingsArr]= useState([])
const [CreditLoanssArr, setCreditLoansArr]= useState([])

  
        //   call api for all Accounts associated with this user
        // const loadAccounts = async ()=>{
        //   let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
        //   let response = await fetch('http://localhost:3001/user/{1}/accounts', {headers})
        //   let data = response.json();
        //   setAccountArray(data);

        // }
        useEffect(
          // ()=> loadAccounts()
          ()=>{

      const checksave =[]
      const creditLoan =[]
      for(const ele in AccountArray){
        if(AccountArray[ele].accountTypeName==="checking"|| AccountArray[ele].accountTypeName==="savings"){
          checksave.push(AccountArray[ele])
        }
        else if(AccountArray[ele].accountTypeName==="loans"|| AccountArray[ele].accountTypeName==="credit"){
            creditLoan.push(AccountArray[ele])
        }
      }
      setCheckingSavingsArr(checksave);
      setCreditLoansArr(creditLoan);
  },[AccountArray]
        )
        

    return (

        <div className='Subsections-container mx-5'>
           <Subsection CardArray={CheckingSavingsArr} SubsectionName={"Checking/Savings"}/>
           <Subsection CardArray={CreditLoanssArr} SubsectionName={"Loans/Credit"}/> 
        </div>
    )
}


export default AccountsDisplay;