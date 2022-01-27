import './css/App.css';

import {BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import StDashboard from './components/StDashboard';
import StudentCourses from './components/StudentCourses';
import Navbar from './components/Navbar';
import StudentGrade from './components/StudentGrade';




function App() {
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
 



  return (
    <Router>
      <div className="App">
        <Navbar type="student"/>
      <Routes>
        <Route path="/" element={<StDashboard coursesList={coursesList}/>}/>
        <Route path='/StudentCourses' element={<StudentCourses coursesList={coursesList}/>}/>
        <Route path='/StudentGrade' element={<StudentGrade coursesList={coursesList}/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
