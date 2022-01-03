import '../css/StDashboard.css'
const StDashboard = ({coursesList}) => {
    return (
        <div className='DbContainer'>
            {coursesList.map((course)=>(
                <div className='CourseItem'>
                    <h1 className='CourseHeader'>{course.title}</h1>
                    <center>
                        <p>{course.desc}</p>
                    </center>
                    <button className='filledBtn'>visit</button>
                    <a className='link'>last lecture</a>
                </div>
            ))}
            
        </div>
    )
}

export default StDashboard
