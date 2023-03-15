import { Link, useLocation } from 'react-router-dom'
import HeaderComponent from '../Headercomponent'
import { useState } from 'react'
import CreditCardConfirmation from './CreditCardConfirmation'
import ApplicationForm from '../AbstractSignupForm/ApplicationForm'

export default function CreditCardSignup(){
  const [response, setResponse] = useState(null)

  const location = useLocation()
  const {
    id,
    rewardsName
  } = location.state;

  return <>
    <HeaderComponent pageName={`Apply for a ${rewardsName} card`}/>

    <Link className='btn btn-dark mt-4 me-auto' to=".." relative='path'>
      Return to card selection
    </Link>
    {response
      ? <CreditCardConfirmation
        rewardsName={rewardsName}
        response={response}
      />
      : <ApplicationForm
        route="user/1/creditCardApplication"
        handleResponse={setResponse}
      >
        <input 
          hidden
          readOnly
          name='creditCardTypeId'
          value={id}
        />
      </ApplicationForm>
    }
  </>
}