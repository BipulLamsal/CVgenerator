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

const [personalDetails,setPersonalDetails] = useState({
  data : 'Personal Details',
  'Full Name' : '',
  'Email' : '',
  'Phone Number' : '',
  'Address': ''
})

const [education,setEducation] = useState({
  data : 'Education',
  'School' : '',
  'Degree' : '',
  'Start Date' : '',
  'End Date' : '',
  'Location' : ''
})

const [experiences,setExperiences] = useState({
  data : 'Experiences',
  'Company Name' : '',
  'Position Title' : '',
  'Start Date' : '',
  'End Date' : '',
  'Location' : '',
  'Description' : ''
})


  return (
    <div className='container'>
      <ToggleGroup selectedBtn = {selectedBtn} setSelectedBtn ={setSelectedBtn} toggleContent={toggleContent}/>
      <FormShow selectedBtn = {selectedBtn} toggleContent={toggleContent} 
      personalDetails = {personalDetails} setPersonalDetails = {setPersonalDetails}
      education = {education} setEducation = {setEducation}
      experiences = {experiences} setExperiences = {setExperiences}
      />
    </div>
  )
}

export default App
