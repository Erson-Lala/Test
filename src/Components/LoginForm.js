import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginFailed } from '../Redux/authSlice';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import StudentsInClass from '../Assets/StudentsInClass.webp';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const students = useSelector(state => state.students);
  const [NID, setNID] = useState('');
  const currentUser = useSelector(state => state.auth.currentUser);
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const auth = useSelector(state => state.auth);

  useEffect(() => {
    if (auth.currentUser) {
      setLoginSuccess(true);
      setTimeout(() =>
        {navigate(`/students/${currentUser.NID}`)},
      2000);
    }
  }, [auth.currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const student = students.find(student => student.NID === NID);
    if (student && student.password === password) {
      dispatch(login(student));
    } else {
      dispatch(loginFailed());
      setLoginSuccess(false);
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
        {auth.error && <p style={{ color: "red" }}>
          Nuk ekziston perdorues me te
          njejtat kredenciale te studenteve!
        </p>}
        {!auth.error && loginSuccess && <p style={{ color: "green" }}>Ju u loguat me sukses!</p>}
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
      <div id='imgDiv'><img alt='' id='studentsImage' src={StudentsInClass}/></div>
    </div>
  );
}

export default LoginForm;
