export default function LoanConfirmation({loanResponse = {
  accountId: Number(),
  approvedAmount: Number(),
  interestRate: Number(),
  minimumPaymentAmount: Number()
}}){
  return <div className="card" style={{width: "18rem"}}>
    <h5 className="card-header alert alert-success">You have been granted a loan</h5>

    <div className="p-4 pt-0 d-flex flex-column align-items-start">
      <p className="card-text">Approved amount - {loanResponse.approvedAmount}</p>
      <p className="card-text">Interest rate - {loanResponse.interestRate}</p>
      <p className="card-text">Minimum payment amount - {loanResponse.minimumPaymentAmount}</p>
    </div>

  </div>
}