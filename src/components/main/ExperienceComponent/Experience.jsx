import { useState } from 'react'
import ExperienceExpandable from "./ExperienceExpandable";
import ExperienceForm from "./ExperienceForm";
function Experience({experience,setExperience,entry,setEntry})
{


      const[expand,setExpand] = useState(false)

      function initialForm()
      {
        if(entry)
        {
        return(
        <ExperienceForm experience={experience} setExperience={setExperience} entry={entry} setEntry={setEntry}></ExperienceForm> 
        )
        }   
        else
        {
            
            
            return(
            <div
            className='form_element'>  <button onClick={()=> setEntry(true)}>Add New</button>
                </div>
          )
        }

      }

    return(<>
        {experience.map((item,index)=>{

            return <ExperienceExpandable formindex = {index} experience={experience} setExperience={setExperience} entry={entry} setEntry={setEntry}expand={expand} setExpand={setExpand}></ExperienceExpandable>
        })}

        <div className="form_container" >  
        {initialForm()}
        </div>
        </>
    )
}
export default Experience