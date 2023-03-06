import React, { useEffect,useState } from "react";
import Section from "../Section/Section";


const AccountInfoCard = () => {
  const [AccountInfo, setAccountInfo] = useState({
    id: 5,
    userId: 1,
    accountTypeName: "checking",
    accountTypeDescription: "account for general spending purposes",
    balance: 0.0,
    confirmation: false,
    active: true,
    pointsBalance: 0,
    accountName: "College savings",
    createdDate: 1677683776994,
  });

  // useEffect(async()=>{
  //       let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
  //       let response = await fetch('http://localhost:3001/user/{userId}/account/{accountId}', {headers})
  //       let data = response.json();
  //       setAccountInfo(data)
  // }
  // )
  return (
    <>
      <div className="card">
        <div className="card-body text-start">
          <h2 className="text-left">{AccountInfo.accountName}</h2>
          <h4>{AccountInfo.accountTypeName.toUpperCase()}</h4>
          <div>Balance: {AccountInfo.balance}</div>
        </div>
      </div>
    </>
  );
};

export default AccountInfoCard;