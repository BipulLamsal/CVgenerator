import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBuildingColumns,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./App.css";
import "./styles/formstyle.css";

import ToggleGroup from "./components/toggle/ToggleGroup";
import PersonalDetails from "./components/main/PersonalDetails";
import Education from "./components/main/EducationComponent/Education";
import Experience from "./components/main/ExperienceComponent/Experience";
import RenderCV from "./components/render/RenderCV";

const toggleContent = [
  {
    data: "Personal Details",
    icon: faUser,
  },

  { data: "Education", icon: faBuildingColumns },

  { data: "Experiences", icon: faHandshake },
];

function App() {
  const [selectedBtn, setSelectedBtn] = useState("Personal Details");
  const [personalDetails, setPersonalDetails] = useState({});

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [entryedu, setEntryEdu] = useState(true);
  const [entryexp, setEntryExp] = useState(true);
  const [preview,setPreview] = useState(false)

  function displayForm() {
    if (selectedBtn == "Personal Details") {
      return (
        <PersonalDetails
          personalDetails={personalDetails}
          setPersonalDetails={setPersonalDetails}
        />
      );
    } else if (selectedBtn == "Education") {
      return (
        <Education
          education={education}
          setEducation={setEducation}
          entry={entryedu}
          setEntry={setEntryEdu}
        />
      );
    } else if (selectedBtn == "Experiences") {
      return (
        <Experience
          experience={experience}
          setExperience={setExperience}
          entry={entryexp}
          setEntry={setEntryExp}
        />
      );
    }
  }

  return (
    <>
      <div className="container">
        <ToggleGroup
          selectedBtn={selectedBtn}
          setSelectedBtn={setSelectedBtn}
          toggleContent={toggleContent}
        />
        <div className="maincontent">
          <p className="mainText">{selectedBtn}</p>
          {displayForm()}
        </div>
      </div>
      <div className="render_container">
        <button className="preview_button" onClick={(e)=>{
          if(preview){
            setPreview(false)
            e.target.innerText = "Preview"
          }
          else
          {
            e.target.innerText = "Close"
            setPreview(true)
          }
        }}>Preview</button>
        {preview?<RenderCV personalDetails = {personalDetails} education={education} experience={experience}></RenderCV>:<></>}
      </div>
    </>
  );
}

export default App;
