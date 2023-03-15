import { Link } from "react-router-dom";

export default function CreditCardConfirmation({rewardsName = String(), response = Object()}){

  return <div className="container p-4 w-25">
    {
      response.error && <h5 className="alert alert-warning">{response.error}</h5>
    }
    {
      response.message && <h5 className="alert alert-success">You have successfully signed up for a {rewardsName} card</h5>
    }
    <Link
      className="btn btn-dark mb-4"
      to={"/"}
    >
      Go back home
    </Link>
  </div>
}
