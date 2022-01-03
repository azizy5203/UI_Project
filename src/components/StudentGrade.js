import '../css/StudentGrade.css'
import py from '../assets/Python.svg'
const StudentGrade = ({coursesList}) => {
    return (
        <div>
            <div className="topContainer">
                <h1>Student Grade</h1>
                <input type="text" placeholder='search'/>
            </div>

            <div className='gradeItemContainer'>
                {
                    coursesList.map((course)=>(
                    <div className='gradeItem'>
                        <h2>{course.title}</h2>
                        <h4>3hrs</h4>
                        <ul>
                            <li>mid-term: <b>18/20</b></li>
                            <li>labs: <b>15/15</b></li>
                            <li>oral: <b>5/5</b></li>
                            <li>final: <b>60/60</b></li>
                        </ul>
                        <img src = {py} alt=''></img>
                        <div className="sep"></div>
                        <div className='letterGrade'>
                            <h1>{course.grade}</h1>
                        </div>
                    </div>       
                    ))
                }
            </div>
        </div>
    )
}

export default StudentGrade;
