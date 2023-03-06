import React, { useEffect,useState } from "react";
import Section from "../Section/Section";


const AccountInfoCard = ({AccountInfo}) => {
 
  return (
    <>
  <div className='p-3 Account-card card' >
        <span className='Card-title '>Name: {AccountInfo.accountName}</span>
        <div className='d-flex flex-row flex-wrap bd-highlight'>
          <div className='Account-name ms-3'>
            <div>Account Type: {AccountInfo.accountTypeName}</div>
          </div>
             <div className='Account-Balance my-auto ms-auto'>Current Balance: ${AccountInfo.balance}</div>
        </div>
    </div>

    </>
  );
};

export default AccountInfoCard;