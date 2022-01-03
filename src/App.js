import './css/App.css';

import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import StDashboard from './components/StDashboard';
import StudentCourses from './components/StudentCourses';
import ProfessorDashboard from './components/ProfessorDashboard';
import Navbar from './components/Navbar';
import StudentGrade from './components/StudentGrade';




function App() {
  var [type,setType] = useState("student")
  //for students pages
  const coursesList = [
    {
      title:'Cyber Security',
      desc:`This course goes through the 
            advanced topics`,
      creds:'3hrs',
      grade:'B',
    },
    {
      title:'C++ Graphics',
      desc:`This course goes through the 
            advanced topics in C++`,
      creds:'3hrs',
      grade:'F',

    },
    {
      title:'Advanced ML',
      desc:`This course goes through the 
            advanced topics in ML`,
      creds:'3hrs',
      grade:'B',

    },
    {
      title:'Advanced Python',
      desc:`This course goes through the 
            advanced topics`,
      creds:'3hrs',
      grade:'C',

    },
    {
      title:'Intro to NLP',
      desc:'This course goes through the techniques of Natural Language Proccessing',
      creds:'3hrs',
      grade:'A',

    },
    {
      title:'C++ Graphics',
      desc:`This course goes through the 
            advanced topics in C++`,
      creds:'3hrs',
      grade:'B',

    },
    {
      title:'Advanced ML',
      desc:`This course goes through the 
            advanced topics in ML`,
      creds:'3hrs',
      grade:'C',

    },
    {
      title:'Advanced Python',
      desc:`This course goes through the 
            advanced topics`,
      creds:'3hrs',
      grade:'G',
    },
    {
      title:'C++ Graphics',
      desc:`This course goes through the 
            advanced topics in C++`,
      creds:'3hrs',
      grade:'F',

    },
  ]
  //for Prof Dashboard
  const Data = [
    {
      id: 1,
    
      name: "python",
      meaning:
        "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
    },
    {
      id: 2,

      name: "oop",
      meaning:
        "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a “high five” or to say thank you."
    },
    {
      id: 3,
   
      name: "Data structure",
      meaning:
        "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
    }
  ];



  return (
    <Router>
      <div className="App">
        <Navbar type={type}/>
      <Routes>
        <Route path="/" element={<StDashboard coursesList={coursesList}/>}/>
        <Route path='/StudentCourses' element={<StudentCourses coursesList={coursesList}/>}/>
        <Route path='/StudentGrade' element={<StudentGrade coursesList={coursesList}/>}/>
        <Route path='/ProfessorDashboard' element={<ProfessorDashboard/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
