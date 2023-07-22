import InputComponent from "../InputComponent"

function PersonalDetails()
{

    return(
        <form className="form_container">  
            <InputComponent label= "Full Name" type= "text"> </InputComponent>
            <InputComponent label= "Degree" type= "text"> </InputComponent>
            <InputComponent label= "Start Date" type= "date"> </InputComponent>
            <InputComponent label= "End Date" type= "date"> </InputComponent>
            <InputComponent label= "Address" type= "text"> </InputComponent>
        </form>
    )

}
export default PersonalDetails