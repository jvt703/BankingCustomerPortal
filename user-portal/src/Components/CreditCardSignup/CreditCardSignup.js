import { Link, useLocation } from 'react-router-dom'
import HeaderComponent from '../Headercomponent'
import { useState } from 'react'
import CreditCardConfirmation from './CreditCardConfirmation'
import ApplicationForm from '../AbstractSignupForm/ApplicationForm'
import Section from '../Section/Section'

export default function CreditCardSignup(){
  const [response, setResponse] = useState(null)

  const location = useLocation()
  const {
    id,
    rewardsName
  } = location.state;

  return <>
    <HeaderComponent pageName={`Apply for a ${rewardsName} card`}/>

    <Section>
      <div className='d-flex flex-column justify-content-center'>
        <div className='container'>
          <Link className='btn btn-dark' to=".." relative='path'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg> Return to card selection
          </Link>
        </div>
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
      </div>
    </Section>
  </>
}