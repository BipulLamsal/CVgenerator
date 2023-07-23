function CvEducation({education})
{
return(

<div className="cv_container">
    <p className='cv_title'>Education</p>
    {education.map(item=>{
        return(
            <div className='cv_content' key={item['Degree']}>
            <div className='cv_main_text'>
                <p>{item['Degree']}</p>
                <div className='cv_sub_text'>
                    <p>{item['School'] + item['Location']}</p>
                    <p>{item['Start Date']}, {item['End Date']}</p>
                </div>
            </div>              
            <div className='cv_description'>
                <p>{item['Description']}</p>
            </div>
    
        </div>
        )
    })}




</div>
)
}

export default CvEducation