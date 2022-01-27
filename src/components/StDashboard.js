import '../css/StDashboard.css'
import {Link} from 'react-router-dom' 
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
                    <Link to="/" className='link'>last lecture</Link>
                </div>
            ))}
            
        </div>
    )
}

export default StDashboard
