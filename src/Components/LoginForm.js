import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginFailed } from '../Redux/authSlice';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import StudentsInClass from '../Assets/StudentsInClass.webp';

const LoginForm = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const [NID, setNID] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector(state => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const student = students.find(student => student.NID === NID);
    if (student && student.password === password) {
      dispatch(login(student));
    } else {
      dispatch(loginFailed());
    }
  }

  return (
    <div id='mainLoginDiv'>
      <div id='leftLoginDiv'>
        <h2 id='loginGreeting'>
        Plotesoni te dhenat e meposhtme per 
        t’u identifikuar ne sistemin e 
        menaxhimit te studenteve:
        </h2>
        {auth.error && <p style={{ color: "red" }}>{auth.error}</p>}
        {auth.isLoggedIn && <p style={{ color: "green" }}>You logged in successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div id='formNID'>
            <label className='label'>NID student</label>
            <input
              className='input'
              type="text" 
              value={NID} 
              onChange={(e) => setNID(e.target.value)} 
              required 
            />
          </div>
          <div id='formFjalekalimi'>
            <label className='label' id='label2'>Fjalekalimi </label>
            <input 
              className='input'
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button id='button1' className='formButton' type="submit">Indentifikohu</button>
          <Link id='registerLink' to="/register"><button className='formButton'>Regjistrohu</button></Link>
        </form>
      </div>
      <div id='imgDiv'><img id='studentsImage' src={StudentsInClass}/></div>
    </div>
  );
}

export default LoginForm;
