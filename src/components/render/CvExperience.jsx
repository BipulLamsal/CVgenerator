function CvExperience({experience})
{
return(

<div className="cv_container">
    <p className='cv_title'>Experience</p>
    {experience.map(item=>{
        return(
            <div className='cv_content' key={item['Company'] + item['Position']}>
            <div className='cv_main_text'>
                <p>{item['Company']  + item['Location']}</p>
                <div className='cv_sub_text'>
                    <p>{item['Position']}</p>
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

export default CvExperience