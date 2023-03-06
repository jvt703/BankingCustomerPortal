import React, { useEffect,useState } from "react";
import Section from "../Section/Section";


const AccountInfoCard = ()=>{
    const [AccountInfo, setAccountInfo]= useState({
    "id": 5,
    "userId": 1,
    "accountTypeId": 1,
    "balance": 0.0,
    "confirmation": false,
    "active": true,
    "pointsBalance": 0,
    "accountName": "test account 1",
    "createdDate": 1677683776994
  })

    // useEffect(async()=>{
    //       let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
    //       let response = await fetch('http://localhost:3001/user/{userId}/account/{accountId}', {headers})
    //       let data = response.json();
    //       setAccountInfo(data)
    // }
    // )

//       {
//     "id": 5,
//     "userId": 1,
//     "accountTypeId": 1,
//     "balance": 0.0,
//     "confirmation": false,
//     "active": true,
//     "pointsBalance": 0,
//     "accountName": "test account 1",
//     "createdDate": 1677683776994
//   }
    return (
        <>  
            <h2>
                {AccountInfo.accountName}
            </h2>
            <div>
                Balance: {AccountInfo.balance}
            </div>
    
        </>
    );

}

export default AccountInfoCard;