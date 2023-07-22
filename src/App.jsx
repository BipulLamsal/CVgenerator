import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuildingColumns, faHandshake} from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react'
import './App.css'
import './styles/formstyle.css'

import ToggleGroup from './components/toggle/ToggleGroup';
import PersonalDetails from './components/main/PersonalDetails';
import Education from './components/main/Education';
import Experiences from './components/main/Experience';


const toggleContent = [

  {
  data:'Personal Details', 
  icon: faUser,

},
  
  {data:'Education', 
  icon: faBuildingColumns,
},
  
  
  {data:'Experiences', 
  icon: faHandshake,
}

];

function App() {
const [selectedBtn, setSelectedBtn] = useState('Education');
const [personalDetails,setPersonalDetails] = useState({
  data : 'Personal Details',
  'Full Name' : '',
  'Email' : '',
  'Phone Number' : '',
  'Address': ''
})
const [education, setEducation] = useState([]);
const [experiences, setExperiences] = useState([]);
const [entryedu,setEntryEdu] = useState(true);



function displayForm()
{
if (selectedBtn == "Personal Details")
{
return  <PersonalDetails personalDetails = {personalDetails} setPersonalDetails ={setPersonalDetails} />
}
else if (selectedBtn == "Education")
{
return <Education education={education} setEducation = {setEducation} entry={entryedu} setEntry={setEntryEdu}/>
}
else if (selectedBtn == 'Experiences')
{
return <Experiences experiences ={experiences} setExperiences={setExperiences}/>
}

}

  return (
    <div className='container'>
      <ToggleGroup selectedBtn = {selectedBtn} setSelectedBtn ={setSelectedBtn} toggleContent={toggleContent}/>
      <div className='maincontent'>
        <p className='mainText'>{selectedBtn}</p>
        {displayForm()}
      </div>
    
    </div>
  )
}

export default App
