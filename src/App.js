import './css/App.css';
import logo from '../src/assets/logo.svg'
import noti from '../src/assets/Notifications.svg'
import person from '../src/assets/person.svg'
import { useState } from 'react';
import StDashboard from './components/StDashboard';
import StudentCourses from './components/StudentCourses';

function App() {
  var [type,setType] = useState("student")
  const coursesList = [
    {
      title:'Cyber Security',
      desc:`This course goes through the 
            advanced topics`,
      creds:'3hrs',
    },
    {
      title:'C++ Graphics',
      desc:`This course goes through the 
            advanced topics in C++`,
      creds:'3hrs',
    },
    {
      title:'Advanced ML',
      desc:`This course goes through the 
            advanced topics in ML`,
      creds:'3hrs',
    },
    {
      title:'Advanced Python',
      desc:`This course goes through the 
            advanced topics`,
      creds:'3hrs',
    },
  ]
  return (
    <div className="App">
      <StudentCourses coursesList={coursesList}/>
        <header>
          <img src = {logo} className = "logo" alt=''></img>
          <span className = "sim">SIM</span>
          
          <a href="https://www.google.com"><img src = {noti} className = "notif" alt=''/></a>
          <a href=""><img src = {person} className = "person" alt=''></img></a>
          <nav>
            <ul className = "nav-area">
              <li><a href = "#">Home</a></li>
              <li><a href = "#">Attendance</a></li>
              <li><a href = "#">Grades</a></li>
              <li><a href = "#">Courses</a></li>
              <li><a href = "#">Help</a></li>
            </ul>
            <span className = "type">{type}</span>
          </nav>
      </header>
      <br />
      <StDashboard coursesList={coursesList}/>
    </div>
  );
}

export default App;
