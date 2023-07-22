import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuildingColumns, faHandshake} from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react'
import './App.css'
import './styles/formstyle.css'

import ToggleGroup from './components/toggle/ToggleGroup';
import PersonalDetails from './components/main/PersonalDetails';
import Education from './components/main/EducationComponent/Education';
import Experience from './components/main/ExperienceComponent/Experience';


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
const [selectedBtn, setSelectedBtn] = useState('Personal Details');
const [personalDetails,setPersonalDetails] = useState({})

const [education, setEducation] = useState([]);
const [experience, setExperience] = useState([]);
const [entryedu,setEntryEdu] = useState(true);
const [entryexp,setEntryExp] = useState(true)



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
return <Experience experience ={experience} setExperience={setExperience} entry={entryexp} setEntry={setEntryExp}/>
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
