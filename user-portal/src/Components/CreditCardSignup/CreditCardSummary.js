import { useState } from "react"
import CreditCardConfirmation from "./CreditCardConfirmation";

export default function CreditCardSummary({cardData = {
  id: Number(),
  rewardsName: String(),
  interestRate: Number(),
  minimumPayment: Number(),
  creditLimit: Number()
}}){

  const [cardHasBeenAppliedFor, setCardHasBeenAppliedFor] = useState(false);
  const [cardApplicationResponseCode, setCardApplicationResponseCode] = useState(null)

  function handleCardSignup(){
    const headers = new Headers()
    headers.append("content-type", "application/json")
    fetch(process.env.REACT_APP_BACKEND_URL + "user/1/creditCard", {
      method: "POST",
      headers,
      body: JSON.stringify({creditCardTypeId: cardData.id})
    })
    .then(res => {
      setCardHasBeenAppliedFor(true)
      setCardApplicationResponseCode(res.status)
    })
  }
  
  return <div className="justify-content-center mt-2 d-flex flex-column">
    <div style={{
      width: "18rem"
    }}>
        {
          cardHasBeenAppliedFor
          ? <CreditCardConfirmation rewardsName={cardData.rewardsName} responseCode={cardApplicationResponseCode}/>
          : <div className="card">
            <div className="card-body">
              <h5 className="card-title">{cardData.rewardsName}</h5>
              <div className="card-text">
                <ul className="d-flex flex-column align-items-start">
                  <li>Interest rate: {Math.trunc(cardData.interestRate * 100)}%</li>
                  <li>Minimum payment: ${cardData.minimumPayment.toFixed(2)}</li>
                  <li>Credit limit: ${cardData.creditLimit.toFixed(2)}</li>
                </ul>
              </div>
              <button className="btn btn-primary w-100" onClick={handleCardSignup}>
                Sign up
              </button>
            </div>
          </div>
        }
    </div>
    
  </div>
}