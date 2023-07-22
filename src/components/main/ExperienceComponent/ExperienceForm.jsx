import { useState } from "react";

function ExperienceForm({experience, setExperience,entry,setEntry})
{
    const [experience_local, setExperience_local] = useState(
        {
        'Company' : '',
        'Position' : '',
        'Start Date' : '',
        'End Date' : '',
        'Location' : '',
        'Description':''
      }    );


    const handleInputChange = (event)=>{

  
        const { name, value } = event.target;
        setExperience_local(
            {...experience_local,
                [name]:value
            }

        );
        }

    const handleOnSave = () =>
        {
            setEntry(false)
            if(experience_local['Company'] != '')
            {
                            
        setExperience (
        
            [...experience,
                experience_local  
            ]
        )
            }

        }



    return(
        <>
        <div className="form_element">
        <label>Company</label>
        <input type="text" placeholder="Enter The Company Name" onChange={handleInputChange} name="Company"></input>
        </div>

        <div className="form_element">
        <label>Postion</label>
        <input type="text" placeholder="Enter Your Position On The Company" onChange={handleInputChange} name="Position"></input>
        </div>

        <div className="form_element">
        <label>Start Date</label>
        <input type="date"  onChange={handleInputChange} name="Start Date"></input>
        </div>

        <div className="form_element">
        <label>End Date</label>
        <input type="date" onChange={handleInputChange} name="End Date"></input>
        </div>

        <div className="form_element">
        <label>Location</label>
        <input type="text" onChange={handleInputChange} name="Location"></input>
        </div>

        <div className="form_element">
        <label>Description</label>
        <textarea onChange={handleInputChange} name="Description"></textarea>
        </div>

        <div className="form_element">
        <button onClick={handleOnSave}>Save</button>    
        </div>

        </>

    )
}
export default ExperienceForm