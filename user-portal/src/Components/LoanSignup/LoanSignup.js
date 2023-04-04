import { useEffect, useState } from "react"
import ApplicationForm from "../AbstractSignupForm/ApplicationForm"
import LabeledDropdown from "../AbstractSignupForm/LabeledDropdown"
import LabeledInput from "../AbstractSignupForm/LabeledInput"
import HeaderComponent from "../Headercomponent"
import Section from "../Section/Section"
import LoanConfirmation from "./LoanConfirmation"

export default function LoanSignup(){

  const [loanResponse, setLoanResponse] = useState(null)
  const [depositableAccounts, setDepositableAccounts] = useState([])

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + "user/1/accounts")
    .then(res => res.json())
    .then(res => setDepositableAccounts(res.filter(account => !["Loan", "Credit"].includes(account.accountTypeName))))
  }, [])

  return <>
    <HeaderComponent pageName={"Apply for a loan"}/>

    <Section>
    {loanResponse 
      ? <LoanConfirmation loanResponse={loanResponse} />
      : <ApplicationForm
        route="user/1/loanApplication"
        handleResponse={setLoanResponse}
      >
        <h5>Loan details</h5>
        <LabeledInput 
          className="col-sm-6 col-12"
          inputId="loanAmount"
          labelText="Amount requested:"
          title="Input should be a whole number"
          pattern="\d*"
          useName
        />
        <LabeledDropdown
          className="col-sm-6 col-12"
          inputId="debitedAccountId"
          labelText="Account to be credited:"
          options={depositableAccounts.map(account => {
            return {text: account.accountName, value: account.id}
          })}
          useName
        />
      </ApplicationForm>
    }
    </Section>
  </>
}