function InputComponent({formElement, details, setDetails})
{   


    
    const formElementArray = Object.entries(formElement)

    const handleInputChange = (event)=>{
        const { name, value } = event.target;
        setDetails({

            ...details,  
            [name]: value
          });
    };


    return(
        formElementArray.map((element)=>{
            return (
             <div className="input_container" key={element[0]}>
                <label>{element[0]}</label>
                {element[1] == 'textarea' ? <textarea></textarea> :<input placeholder = {`Enter Your ${element[0]}`}type={element[1]} name= {element[0]} value={details[element[0]]} onChange={handleInputChange}></input> }
            </div>
            )
        })
    )
}

export default InputComponent