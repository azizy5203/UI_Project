import '../css/StudentCourses.css'
import py from '../assets/Python.svg'
const StudentCourses = ({coursesList}) => {
    return (
        <div className='Container'>
            <h1>Studied Courses</h1>
            <input type="text" placeholder='Search'/>
            {coursesList.map((course)=>(
                <div className = "itemContainer">
                    <h2>{course.title}</h2>
                    <h3>{course.creds}</h3>
                    <p>{course.desc}</p>
                    <img src = {py} alt=''></img>
                </div>
            ))}
            
            
        </div>
    )
}

export default StudentCourses
