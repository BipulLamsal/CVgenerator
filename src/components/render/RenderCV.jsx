import '../../styles/rendercv.css'
import CvEducation from './CvEducation';
import CvExperience from './CvExperience';
import CvHeader from './CvHeader';
function RenderCV({personalDetails,education,experience})
{
return(
<page size="A4" className="finalcv">
    {console.log(personalDetails)}
<CvHeader personalDetails={personalDetails}></CvHeader>
<CvEducation education={education}></CvEducation>
<CvExperience experience={experience}></CvExperience>







</page>)
}
export default RenderCV;