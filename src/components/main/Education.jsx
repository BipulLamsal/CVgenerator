import { useState } from 'react'
import Expandable from "./Expandable";
import EducationForm from "./EducationForm";
function Education({education,setEducation,entry,setEntry})
{


      const[expand,setExpand] = useState(false)

      function initialForm()
      {
        if(entry)
        {
        return(
        <EducationForm education={education} setEducation={setEducation} entry={entry} setEntry={setEntry}></EducationForm> 
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




const handleOnDelete = () =>
{

}
    return(<>
        {education.map((item,index)=>{

            return <Expandable formindex = {index} education={education} setEducation={setEducation} entry={entry} setEntry={setEntry}expand={expand} setExpand={setExpand}></Expandable>
        })}

        <div className="form_container" >  
        {initialForm()}
        </div>
        </>
    )
}
export default Education