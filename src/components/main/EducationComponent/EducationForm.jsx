import { useState } from "react";

function EducationForm({education, setEducation,entry,setEntry})
{
    const [education_local, setEducation_local] = useState(
        {
        'School' : '',
        'Degree' : '',
        'Start Date' : '',
        'End Date' : '',
        'Location' : ''
      }    );


    const handleInputChange = (event)=>{

  
        const { name, value } = event.target;
        setEducation_local(
            {...education_local,
                [name]:value
            }

        );
        }

    const handleOnSave = () =>
        {
            setEntry(false)
            if(education_local['School'] != '')
            {
                            
        setEducation (
        
            [...education,
                education_local  
            ]
        )
            }

        }



    return(
        <>
        <div className="form_element">
        <label>School</label>
        <input type="text" placeholder="Enter The College Name" onChange={handleInputChange} name="School"></input>
        </div>

        <div className="form_element">
        <label>Degree</label>
        <input type="text" placeholder="Enter The College Degree" onChange={handleInputChange} name="Degree"></input>
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
        <button onClick={handleOnSave}>Save</button>    
        </div>

        </>

    )
}
export default EducationForm