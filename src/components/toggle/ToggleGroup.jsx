import ToggleButton from './ToggleButton'
import '../../styles/togglestyle.css'


function ToggleGroup({selectedBtn,setSelectedBtn,toggleContent}){
    return (
        <div className='toggle-group'>
              <ToggleButton selectedBtn = {selectedBtn} setSelectedBtn ={setSelectedBtn} toggleContent={toggleContent}/>
      </div>  
    )
}
export default ToggleGroup
