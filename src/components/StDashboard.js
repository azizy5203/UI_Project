import logo from '../assets/logo.svg'
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
                    <button className='filledBtn'>view</button>
                    <a className='link'>course page</a>
                </div>
            ))}
            
        </div>
    )
}

export default StDashboard
