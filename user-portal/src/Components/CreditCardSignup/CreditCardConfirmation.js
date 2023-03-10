export default function CreditCardConfirmation({rewardsName = String(), responseCode = Number()}){

  const responseCodeBodyMap = {
    200: <h5 className="alert alert-success">You have successfully signed up for a {rewardsName} card</h5>,
    409: <h5 className="alert alert-warning">You already have a {rewardsName} card</h5>
  }

  return <div>
    {responseCodeBodyMap[responseCode]}
  </div>
}
