import React, { useState } from 'react';


const TransactionInfoCard = ({sourceAccount, destinationAccount, amount, date, points, reversal}) => {
    const accountID = 1;
    let type = (sourceAccount === accountID ? "Widthdrawl" : (destinationAccount === accountID ? "Deposit" : "Transfer"));
    if (type === "Transfer") {return (null)}
    if (reversal === true) {type += " (REVERSAL)"}
    return (
        // <div className="card">
        //     <div className="card-body">
        //         <div className="card-row">
        //             <span>
        //                 <h4>{type}</h4>
        //                 <h4>Amount: ${amount}</h4>
        //                 <h4>Date: {new Date(date).toString()}</h4>
        //                 <h4>Points: {points}</h4>
        //             </span>
        //         </div>
        //     </div>
        // </div>
        <tr>
            <td>{type}</td>
            <td>${amount}</td>
            <td>{new Date(date).toString()}</td>
            <td>{points}</td>
        </tr>
    );
};

export default TransactionInfoCard;