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
            <a href=""><img src = {person} className = "person" alt=''></img></a>
            <nav>
                <ul className = "nav-area">
                <li><Link to = "/">Home</Link></li>
                <li><a href = "#">Attendance</a></li>
                <li><a href = "#">Grades</a></li>
                <li><Link to = "/StudentCourses">Courses</Link></li>
                <li><a href = "#">Help</a></li>
                </ul>
                <span className = "type">{type}</span>
            </nav>
        </header>
    )
}

export default Navbar
