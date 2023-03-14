import { useEffect, useState } from "react"
import HeaderComponent from "../Headercomponent"
import LoanConfirmation from "./LoanConfirmation"

export default function LoanSignup(){

  const [loanResponse, setLoanResponse] = useState(null)
  const [depositableAccounts, setDepositableAccounts] = useState([])

  const [targetAccount, setTargetAccount] = useState(0)
  const [requestedAmount, setRequestedAmount] = useState(0.0)

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "user/1/accounts")
    .then(res => res.json())
    .then(setDepositableAccounts)
  }, [])

  function submitRequest(){
    if(targetAccount && requestedAmount){
      fetch(process.env.REACT_APP_BACKEND_URL + "user/1/loan", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          loanAmount: requestedAmount,
          debitedAccountId: targetAccount
        })
      })
      .then(res => res.json())
      .then(setLoanResponse)
    }
  }

  return <div>
    <HeaderComponent pageName={"Apply for a loan"}/>

    <div className="d-flex align-items-center flex-column justify-items-center p-4">
    {loanResponse 
    ? <LoanConfirmation loanResponse={loanResponse} />
    : <div className="card" style={{width: "18rem"}}>
      <div className="card-body d-flex flex-column gap-2 ">
        <h5 className="card-title">Loan details</h5>
        <label htmlFor="loanAmount">Amount requested:</label>
        <input 
          onChange={e => {
            setRequestedAmount(parseFloat(e.target.value))
          }}
          id="loanAmount" 
          type="text" 
          placeholder="1000"
        />
        <label htmlFor="accountCredited">Account to be credited:</label>

        <select 
          name="accountCredited" 
          id="accountCredited"
          onChange={e => {
            setTargetAccount(e.target.value)
          }}
        >
            <option value="">--Please choose an account--</option>
            {
              depositableAccounts
              .filter(account => account.accountTypeName !== "Loan")
              .map((account, index) => <option key={index} value={account.id}>
                {account.accountName}
              </option>)
            }
        </select>

        <button 
          className="btn btn-primary"
          onClick={submitRequest}
        >Request loan</button>
      </div>
    </div>
    }
    </div>
    
    
  </div>
}