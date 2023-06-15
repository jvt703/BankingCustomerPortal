import React, { useEffect, useState } from "react";

const TransactionDropdown = (props)=>{


  const [accountNumbers, setAccountNumbers] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState('');

  useEffect(() => {
    // Make API call to retrieve account numbers
    fetch('https://api.example.com/accounts')
      .then(response => response.json())
      .then(data => {
        // Assuming the API response returns an array of account numbers
        setAccountNumbers(data);
      })
      .catch(error => {
        setAccountNumbers([1232312,42114124])
        console.error('Error fetching account numbers:', error);
      });
  }, []);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  return (
    <div className="d-flex flex-column align-items-start col-sm-6 col-12 align-self-center">
      <label htmlFor="account-select" className="form-label">Select an Account:</label>
      <select
        className="form-select"
        id="account-select"
        value={selectedAccount}
        onChange={handleAccountChange}
        name={props.name}
      >
        <option value="">Select an account</option>
        {accountNumbers.map(account => (
          <option key={account} value={account}>
            {account}
          </option>
        ))}
      </select>
    </div>
  );
}




export default TransactionDropdown;