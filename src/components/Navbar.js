import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import noti from '../assets/Notifications.svg'
import person from '../assets/person.svg'
import '../css/App.css';
const Navbar = ({type}) => {
    return (
        <header>
            <img src = {logo} className = "logo" alt=''></img>
            <span className = "sim">SIM</span>
            
            <a href="https://www.google.com"><img src = {noti} className = "notif" alt=''/></a>
            <Link to="/"><img src = {person} className = "person" alt=''></img></Link>
            <nav>
                <ul className = "nav-area">
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/">Attendance</Link></li>
                    <li><Link to = "/StudentGrade">Grades</Link></li>
                    <li><Link to = "/StudentCourses">Courses</Link></li>
                    <li><Link to = "/ProfessorDashboard">Help</Link></li>
                </ul>
                <span className = "type">{type}</span>
            </nav>
        </header>
    )
}

export default Navbar
