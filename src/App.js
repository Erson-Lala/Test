import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from './Components/LoginForm';
import StudentList from './Components/StudentList';
import StudentDetails from './Components/StudentDetails';
import RegistrationForm from './Components/RegistrationForm';
import Header from './Components/Header';

const App = () => {
  const students = useSelector(state => state.students);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/students/:NID" element={<StudentDetails />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



