export default function LoanConfirmation({loanResponse = {
  message: String()
}}){
  return <div className="container d-flex justify-content-center p-4">
    <div className="card" style={{width: "18rem"}}>
      <h5 className="card-header alert alert-success">Success</h5>
      <p className="card-text pb-3">{loanResponse.message}</p>
    </div>
  </div>
}