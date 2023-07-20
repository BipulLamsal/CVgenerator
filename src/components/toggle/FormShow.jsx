import '../../styles/formstyle.css'
import InputComponent from './InputComponent';
function FormShow({selectedBtn, toggleContent})
{

    const filteredItem = toggleContent.find((item) => item.data === selectedBtn);

    return(
        <div className="display_container">
        <p className="display_header">{selectedBtn}</p>
        <form className='form_container'>
        <InputComponent formElement = {filteredItem['form_element']} />
        </form>
        </div>

    )

}

export default FormShow;