import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBuildingColumns, faHandshake, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';





function ToggleButton({selectedBtn, setSelectedBtn, toggleContent})
{
    
    function handleButtonClick(item)
    {
    setSelectedBtn(item);
    }

    return(

        toggleContent.map(info =>{
            return(
                <button key= {info.data}className={selectedBtn === info.data ? 'toggle-item toggle-item-active' : 'toggle-item toggle-item-inactive'} onClick={()=>handleButtonClick(info.data)}>
                <p><FontAwesomeIcon icon={info.icon }/></p>
                <p>{info.data}</p>
                </button>);
        })

    )

}

export default ToggleButton