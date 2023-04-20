import React, { useEffect,useState } from "react";
import Section from "../Section/Section";


const AccountInfoCard = ({AccountInfo}) => {
 
  return (
    <>
    <div className='p-3 d-flex flex-column flex-md-row gap-3 flex-wrap Account-card card justify-content-between align-items-center' >
        <div className='bd-highlight'>
          <div className="d-flex align-items-center align-items-md-start flex-column">
            <div className='h3'>Name:<wbr /> {'Personal Checkings'}</div>  
            <div className='Account-name'>
              <div>Account Type: {AccountInfo.accountTypeName}</div>
            </div>
          </div>
        </div>
        <div className='Account-Balance'>Current Balance: ${AccountInfo.balance}</div>
    </div>

    </>
  );
};

export default AccountInfoCard;