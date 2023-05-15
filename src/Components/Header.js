import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import IconSchool from '../Assets/IconSchool.jpg';

const Header = () => {
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
          <li><Link to="/students/:id">Detajet e studenteve</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
