function InputComponent({formElement})
{   



    
    const formElementArray = Object.entries(formElement)



    return(
        formElementArray.map((element)=>{
            return (
             <div className="input_container" key={element[0]}>
                <label>{element[0]}</label>
                {element[1] == 'textarea' ? <textarea></textarea> :<input type={element[1]}></input> }
                
            </div>
            )
        })
    )
}

export default InputComponent