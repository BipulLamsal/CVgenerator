function InputComponent({label,type,detail,setDetail})
{

    const handleInputChange = (event)=>{
       
        setDetail({
            ...detail,  
            [label]: event.target.value
          });


    };

return (
    <div className="form_element">
    <label>{label}</label>
    <input type={type} placeholder={"Enter The " +label} value={detail[label]} onChange={handleInputChange} ></input>
    </div>
)
}
export default InputComponent