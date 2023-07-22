import { useState } from "react"
import Education from "./Education";

function Expandable({formindex, education,setEducation,expand,setExpand})
{


const [education_local, setEducation_local] = useState(education[formindex]);



  const handleInputChange = (event)=>{
    event.preventDefault()
    const {name, value } = event.target;

        setEducation_local(
            {...education_local,
                [name]:value
            }
    
        );

    }



const handleOnDelete = (event) =>
    {
        event.preventDefault()
        setEducation(prevEducation => {
            return prevEducation.filter((entry, index) => index !== formindex);
          });
          setEducation_local(education[formindex+1])
    }

const handleOnSave = (event) =>
{
    event.preventDefault()
    setExpand(false)
    setEducation(prevEducation => {
        return prevEducation.map((entry, index) =>
          index === formindex ? education_local : entry
        );
      });
    

}


const handleOnEdit = (event) =>
{

    event.preventDefault()

    education.map((entry,index) =>{
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
            <label>School</label>
            <input type="text" value={education_local['School']} onChange={handleInputChange} name="School"></input>
            </div>
    
            <div className="form_element">
            <label>Degree</label>
            <input type="text" value={education_local['Degree']} onChange={handleInputChange } name="Degree"></input>
            </div>
    
            <div className="form_element">
            <label>Start Date</label>
            <input type="date" value={education_local['Start Date']}  onChange={handleInputChange} name="Start Date"></input>
            </div>
    
            <div className="form_element">
            <label>End Date</label>
            <input type="date" value={education_local['End Date']}  onChange={handleInputChange} name="End Date"></input>
            </div>
    
            <div className="form_element">
            <label>Location</label>
            <input type="text" value={education_local['Location']} onChange={handleInputChange} name="Location"></input>
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
<p className="expandable_title">{education[formindex]['School']}</p>
<div className="form_element expandable_buttons">
<button onClick={handleOnEdit}>Edit</button>
<button onClick={handleOnDelete}>Delete</button>
</div>

</div>

{release()}

</div>

}
export default Expandable