import React, { useEffect, useState } from "react";
import AccountInfoCard from "../Accounts/AccountInfoCard";

const AccountDisplay = ()=>{
  const [AccountInfo, setAccountInfo] = useState({
    id: 5,
    userId: 1,
    accountTypeName: "checking",
    accountTypeDescription: "account for general spending purposes",
    balance: 1110.0,
    confirmation: false,
    active: true,
    pointsBalance: 0,
    accountName: "College savings",
    createdDate: 1677683776994,
  });
  const [TransactionInfo, setTransactionInfo] =useState([])

//   useEffect(async()=>{
//         let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
//         let response = await fetch('http://localhost:3001/user/{userId}/account/{accountId}', {headers})
//         setAccountInfo(data)
//         let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
//         let response = await fetch('http://localhost:3001/Transaction/{userId}/account/{accountId}', {headers})
//         let data = response.json();
//         setTransactionInfo(data)
//   }
//   )

     return (
    <div className="Subsections-container mx-5">
        <AccountInfoCard AccountInfo={AccountInfo} ></AccountInfoCard>
        
    </div>
  );
}

export default AccountDisplay;