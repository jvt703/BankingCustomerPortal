import React, { useState } from 'react';


const TransactionInfoCard = ({sourceAccount, destinationAccount, amount, date, points}) => {
    const accountID = 1;
    const type = (sourceAccount === accountID ? "Deposit" : (destinationAccount === accountID ? "Widthdrawl" : "Transfer"));
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-row">
                    <span>
                        <h4>{type}</h4>
                        <h4>Amount: ${amount}</h4>
                        <h4>Date: {new Date(date).toString()}</h4>
                        <h4>Points: {points}</h4>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoCard;