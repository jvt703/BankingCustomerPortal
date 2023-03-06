import { React} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function AccountSection(props) {

        
        return (
    <div className='d-flex  Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h1 className='Section-title ml-4'>{props.title}</h1>
        <div className='Subsections-container mx-5'>
            
        </div>
    </Card>
    </div>
  );
}

export default AccountSection;