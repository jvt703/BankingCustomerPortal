import React, { useEffect,useState } from "react";
import Section from "../Section/Section";


const AccountInfoCard = ({AccountInfo}) => {
 
  return (
    <>
  <div className='p-3 d-flex flex-row Account-card card' >
        
        <div className='d-flex flex-row flex-wrap bd-highlight'>
          <div className='Card-title '>Name: {AccountInfo.accountName}</div>  
          <div className='Account-name ms-3'>
            <div>Account Type: {AccountInfo.accountTypeName}</div>
          </div>
        </div>
         <div className='Account-Balance flex-grow my-auto ms-auto'>Current Balance: ${AccountInfo.balance}</div>
    </div>

    </>
  );
};

export default AccountInfoCard;