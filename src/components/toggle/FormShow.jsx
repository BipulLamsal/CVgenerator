import '../../styles/formstyle.css'
import InputComponent from './InputComponent';
function FormShow({selectedBtn, toggleContent, 
    personalDetails, setPersonalDetails,
    education,setEducation,
    experiences,setExperiences
})
{

    const filteredItem = toggleContent.find((item) => item.data === selectedBtn);

    function inputComponentDisplay()
    {
        if (selectedBtn == personalDetails.data)

        
        {
            
            return <InputComponent formElement = {filteredItem['form_element']} details = {personalDetails} setDetails = {setPersonalDetails}/>
        }
        else if (selectedBtn == education.data)
        {
            return <InputComponent formElement = {filteredItem['form_element']} details = {education} setDetails = {setEducation}/>
        }
        else if (selectedBtn == experiences.data)
        {
            return <InputComponent formElement = {filteredItem['form_element']} details = {experiences} setDetails = {setExperiences}/>
        }
    }
    return(
        <div className="display_container">
        <p className="display_header">{selectedBtn}</p>
        <form className='form_container'>
        {inputComponentDisplay()}
        </form>
        </div>

    )

}

export default FormShow;