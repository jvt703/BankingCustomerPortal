import { useEffect, useState } from "react"
import Section from "../../Section/Section"

export default function AccountSignupForm(){

  const [accountTypes, setAccountTypes] = useState([])
  useEffect(() => {
    const ACCEPTABLE_ACCOUNT_TYPE_NAMES = ["Checking", "Savings"]

    fetch(process.env.REACT_APP_BACKEND_URL + "accountTypes")
    .then(res => res.json())
    .then(res => res.filter(accountType => ACCEPTABLE_ACCOUNT_TYPE_NAMES.includes(accountType.accountTypeName)))
    .then(setAccountTypes)
  }, [])

  const [accountName, setAccountName] = useState("")
  const [accountTypeId, setAccountTypeId] = useState(null);
  const [submissionResponse, setSubmissionResponse] = useState(null);

  function submit(e){
    e.preventDefault();

    const body = {}
    Array.from(e.target.elements)
      .filter(el => el.value)
      .forEach(el => body[el.id] = el.value)

    fetch(process.env.REACT_APP_BACKEND_URL + "user/1/account", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(setSubmissionResponse)
      .catch(console.error)
  }
  
  return <Section>
    <h1 className="ms-1 ms-md-5 my-2 text-center">Create a New Account</h1>
    <form className="d-flex flex-column gap-3 col-12 col-sm-10 col-md-8 mx-auto" onSubmit={submit}>
      <div className="form-group text-start">
        <label htmlFor="accountName">Account name:</label>
        <input type="text" className="form-control" id="accountName" 
          onChange={e => setAccountName(e.target.value)} 
          placeholder="Enter account name" 
        />
      </div>
      <div className="form-group text-start">
        <label htmlFor="accountTypeId">Account type:</label>
        <select className="form-control" id="accountTypeId" defaultValue="" onChange={e => setAccountTypeId(e.target.value)}>
          <option disabled value="">Select account type</option>
          {accountTypes.map((accountType, index) => <option key={index} value={accountType.id}>
            {accountType.accountTypeName}
          </option>)}
        </select>
      </div>
      <button type="submit" disabled={!(accountName && accountTypeId && !submissionResponse)} className="btn btn-primary">Submit</button>
      {submissionResponse && <div class="alert alert-success" role="alert">
        Account {submissionResponse.accountName} successfully created!
      </div>}
    </form>
  </Section>
}