import { React} from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

function Section(props) {
        
        return (
    <div className='d-flex  Sections-container justify-content-center'>
    <Card className='p-3 m-2 w-75 Section-container'>
      <h1 className='Section-title ml-4'>{props.title}</h1>
        {props.children}
    </Card>
    </div>
  );
}

export default Section;