import { useState } from "react"
import Experience from "./Experience";

function ExperienceExpandable({formindex, experience,setExperience,expand,setExpand})
{


const [experience_local, setExperience_local] = useState(experience[formindex]);



  const handleInputChange = (event)=>{
    event.preventDefault()
    const {name, value } = event.target;

        setExperience_local(
            {...experience_local,
                [name]:value
            }
    
        );

    }



const handleOnDelete = (event) =>
    {
        event.preventDefault()
        setExperience(prevExperience => {
            return prevExperience.filter((entry, index) => index !== formindex);
          });
          setExperience_local(experience[formindex+1])
    }

const handleOnSave = (event) =>
{
    event.preventDefault()
    setExpand(false)
    setExperience(prevExperience => {
        return prevExperience.map((entry, index) =>
          index === formindex ? experience_local : entry
        );
      });
    

}


const handleOnEdit = (event) =>
{

    event.preventDefault()

    experience.map((entry,index) =>{
        if (formindex == index )
        {
            setExpand(true)
        }
    })
}

function release()
{   
    


    if (expand ) 
    {   
        
        return(
        <form className="form_container">
            <div className="form_element">
            <label>Company</label>
            <input type="text" value={experience_local['Company']} onChange={handleInputChange} name="Comapny"></input>
            </div>
    
            <div className="form_element">
            <label>Position</label>
            <input type="text" value={experience_local['Position']} onChange={handleInputChange } name="Position"></input>
            </div>
    
            <div className="form_element">
            <label>Start Date</label>
            <input type="date" value={experience_local['Start Date']}  onChange={handleInputChange} name="Start Date"></input>
            </div>
    
            <div className="form_element">
            <label>End Date</label>
            <input type="date" value={experience_local['End Date']}  onChange={handleInputChange} name="End Date"></input>
            </div>
    
            <div className="form_element">
            <label>Location</label>
            <input type="text" value={experience_local['Location']} onChange={handleInputChange} name="Location"></input>
            </div>

            <div className="form_element">
            <label>Description</label>
            <textarea onChange={handleInputChange} name="Description">{experience_local['Description']}</textarea>
            </div>


            <div className="form_element">
            <button onClick={handleOnSave}>Save</button>
            </div>
            </form>
            )
    }
    else
    {
    return(<></>)
    }
}   

return <div className="expandable_container">
<div className="expandable_header">
<p className="expandable_title">{experience[formindex]['Company']}</p>
<div className="form_element expandable_buttons">
<button onClick={handleOnEdit}>Edit</button>
<button onClick={handleOnDelete}>Delete</button>
</div>

</div>

{release()}

</div>

}
export default ExperienceExpandable;