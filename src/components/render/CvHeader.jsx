function CvHeader({personalDetails})
{
return(<div className="cv_header">
<h1>{personalDetails['Full Name']}</h1>
<p>{personalDetails['Address']},Phone: {personalDetails['Phone Number']}| {personalDetails['Email']} | {personalDetails['LinkedIn/Twitter']}</p>
</div>)
}
export default CvHeader