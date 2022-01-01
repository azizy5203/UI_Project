import './css/App.css';

import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import StDashboard from './components/StDashboard';
import StudentCourses from './components/StudentCourses';
import Navbar from './components/Navbar';

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
    {
      title:'Advanced Python',
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
    {
      title:'C++ Graphics',
      desc:`This course goes through the 
            advanced topics in C++`,
      creds:'3hrs',
    },
  ]
  return (
    <Router>
      <div className="App">
        <Navbar type={type}/>
      <Routes>
          <Route path='/StudentCourses' element={<StudentCourses coursesList={coursesList}/>}/>
          <Route path='/StDashboard' element={<StDashboard coursesList={coursesList}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
