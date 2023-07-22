
function InputComponent({label,type,inputvalue,setInputValue})
{

    const handleInputChange = (event)=>{
        setInputValue({
            ...inputvalue,  
            [label]: event.target.value
          });

    };
return (
    <div className="form_element">
    <label>{label}</label>
    <input type={type} placeholder={"Enter The " +label} onChange={handleInputChange}></input>
    </div>
)
}
export default InputComponent