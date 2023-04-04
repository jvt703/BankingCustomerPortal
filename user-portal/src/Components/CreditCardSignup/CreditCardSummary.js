import { Link } from "react-router-dom";

export default function CreditCardSummary({cardData = {
  id: Number(),
  rewardsName: String(),
  interestRate: Number(),
  minimumPayment: Number(),
  creditLimit: Number()
}}){


  return <div 
    className="justify-content-center mt-2 d-flex flex-column flex-grow-1 card"
    style={{maxWidth: "20rem"}}
    >
      <div className="card-body">
        <h5 className="card-title">{cardData.rewardsName}</h5>
        <div className="card-text">
          <ul className="d-flex flex-column align-items-start text-start">
            <li>Interest rate: {Math.trunc(cardData.interestRate * 100)}%</li>
            <li>Minimum payment: ${cardData.minimumPayment.toFixed(2)}</li>
            <li>Credit limit: ${cardData.creditLimit.toFixed(2)}</li>
          </ul>
        </div>
        <Link 
          to={`${cardData.id}`}
          className="btn btn-primary w-100"
          state={cardData}
        >
          Sign up
        </Link>
      </div>
  </div>
}