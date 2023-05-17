import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Redux/authSlice';
import './Header.css';
import IconSchool from '../Assets/IconSchool.jpg';

const Header = () => {
  const currentUser = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <header className="header">
      <nav id="navBar">
        <div id="mainQuote">
          <img id='logo' src={IconSchool} alt="" />
          <p id='firstParagraph'> 
            Sistemi i menaxhimit te studenteve
            <span id='highSchoolSpan'>High School</span>
          </p>
        </div>
        <ul id="linkList">
          <li><Link to="/login">Indentifikohu</Link></li>
          <li><Link to="/register">Regjistrohu</Link></li>
          <li><Link to="/students">Studentet</Link></li>
          {
            currentUser && (
              <li><Link to={`/students/${currentUser.NID}`}>Detajet e studenteve</Link></li>
            )
          }
          {
          currentUser && (
            <button className='logOut' onClick={handleLogout}>Logout</button>
          )
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
