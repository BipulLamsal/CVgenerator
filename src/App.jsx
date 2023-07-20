import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuildingColumns, faHandshake, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react'
import './App.css'


import ToggleGroup from './components/toggle/ToggleGroup';
import FormShow from './components/toggle/FormShow';


const toggleContent = [
    
  {
  data:'Personal Details', 
  icon: faUser,
  form_element : {'Full Name' : 'text' , 'Email' : 'email' , 'Phone Number' : 'number' , 'Address' :'text'}

},
  
  {data:'Education', 
  icon: faBuildingColumns,
  form_element : {'School' : 'text' , 'Degree' : 'text' , 'Start Date' : 'date' , 'End Date' :'date', 'Location' : 'text' }
},
  
  {data:'Skills', 
  icon: faScrewdriverWrench,
  form_element : {'Full Name' : 'text' , 'Email' : 'email' , 'Phone Number' : 'number' , 'Address' :'text'}
},

  
  {data:'Experiences', 
  icon: faHandshake,
  form_element : {'Company Name' : 'text' , 'Position Title' : 'text' , 'Start Date' : 'date' , 'End Date' :'date', 'Location' : 'text', 'Description' : 'textarea'}
}

];





function App() {
  const [selectedBtn, setSelectedBtn] = useState('Personal Details');
  return (
    <div className='container'>
      <ToggleGroup selectedBtn = {selectedBtn} setSelectedBtn ={setSelectedBtn} toggleContent={toggleContent}/>
      <FormShow selectedBtn = {selectedBtn} toggleContent={toggleContent}/>
    </div>
  )
}

export default App
