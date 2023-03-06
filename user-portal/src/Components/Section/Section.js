import { React} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

function Section(props) {
        
        return (
    <div className='d-flex  Sections-container justify-content-center'>
    <div className='p-3 m-2 w-75 card Section-container'>
      <h1 className='Section-title ml-4'>{props.title}</h1>
        {props.children}
    </div>
    </div>
  );
}

export default Section;