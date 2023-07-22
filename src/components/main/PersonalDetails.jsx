import InputComponent from "../InputComponent"

function PersonalDetails({personalDetails,setPersonalDetails})
{

    return(
        <form className="form_container">  
            <InputComponent label= "Full Name" type= "text" detail ={personalDetails} setDetail ={setPersonalDetails}> </InputComponent>
            <InputComponent label= "Email" type= "text" detail ={personalDetails} setDetail ={setPersonalDetails}> </InputComponent>
            <InputComponent label= "Phone Number" type= "text" detail ={personalDetails} setDetail ={setPersonalDetails}> </InputComponent>
            <InputComponent label= "Address" type= "text" detail ={personalDetails} setDetail ={setPersonalDetails}> </InputComponent>
            <InputComponent label= "LinkedIn/Twitter" type= "text"detail ={personalDetails} setDetail ={setPersonalDetails}> </InputComponent>

        </form>
    )

}
export default PersonalDetails