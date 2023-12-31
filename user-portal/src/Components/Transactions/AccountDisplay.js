import React, { useEffect, useState } from "react";
import AccountInfoCard from "../Accounts/AccountInfoCard";
import TransactionInfoCard from "./TransactionInfoCard";
import axios from "axios";

const AccountDisplay = ()=>{
  const [AccountInfo, setAccountInfo] = useState({
    id: 5,
    userId: 1,
    accountTypeName: "checking",
    accountTypeDescription: "account for general spending purposes",
    balance: 10.0,
    confirmation: false,
    active: true,
    pointsBalance: 0,
    accountName: "Peach Ring Fund",
    createdDate: 1677683776994,
  });
  const [TransactionInfo, setTransactionInfo] =useState([])

  // useEffect(async()=>{
  //       // let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
  //       let response = await fetch(`http://localhost:8080/user/1/account/1`
  //       // , {headers}
  //       )
  //       let data = response.json();

  //       setAccountInfo(data)
  //       // let headers = { Authorization: `Bearer ${Token||localStorage.getItem("userToken")}` };
  //       // let response = await fetch('http://localhost:3001/Transaction/{userId}/account/{accountId}', {headers})
  //       // setTransactionInfo(data)
  // })
  useEffect(
    () => {(
    async () => {
      const baseURL = ("http://localhost:8080/user/1/account/1")
      const account = await axios.get(baseURL);
      setAccountInfo(account.data);
    })();}, []
  );
const [transactionList, setTransactionList] = useState([]);

useEffect(
  () => {(
  async () => {
    const baseURL = ("http://localhost:8082/transaction")
    const users = await axios.get(baseURL);
    setTransactionList(users.data);
  })();}, []
);

const sortTransactionList = ((by) => {
  switch (by) {
    case 0:
      setTransactionList([...transactionList].sort((a, b) => {return (parseInt(b.date) - parseInt(a.date))}));
    break;
    case 1:
      setTransactionList([...transactionList].sort((a, b) => {return (parseInt(b.amount) - parseInt(a.amount))}));
    break;
    case 2:
      setTransactionList([...transactionList].sort((a, b) => {return (parseInt(b.points) - parseInt(a.points))}));
    break;
    default:
  }
});

  return (
    <div className="d-flex flex-column gap-3 mx-1 mx-md-5">
        <AccountInfoCard AccountInfo={AccountInfo} ></AccountInfoCard>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Sort By
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => {sortTransactionList(0)}}>Date</li>
            <li className="dropdown-item" onClick={() => {sortTransactionList(1)}}>Amount</li>
            <li className="dropdown-item" onClick={() => {sortTransactionList(2)}}>Points</li>
          </ul>
        </div>
        <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
        {transactionList.map(transaction => (
          <TransactionInfoCard sourceAccount={transaction.sourceAccount} destinationAccount={transaction.destinationAccount} amount={transaction.amount} points={transaction.points} date={transaction.date} reversal={transaction.reversal}/>
        ))}
            </tbody>
          </table>
    </div>
  );
}

export default AccountDisplay;