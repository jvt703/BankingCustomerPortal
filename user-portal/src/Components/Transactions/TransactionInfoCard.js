import React, { useState } from 'react';


const TransactionInfoCard = ({type, amount, date, points}) => {
    
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-row">
                    <span>
                        <h4>{type}</h4>
                        <h4>Amount: {amount}</h4>
                        <h4>Date: {new Date(date).toString()}</h4>
                        <h4>Points: {points}</h4>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TransactionInfoCard;