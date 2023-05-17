import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../Redux/studentSlice';
import StudentsOutside from '../Assets/StudentsOutside.webp';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [NID, setNID] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const passwordValidation = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return re.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!passwordValidation(password)) {
      setPasswordError("Fjalëkalimi duhet të përmbajë të paktën një shkronjë të madhe, një numër dhe të jetë të paktën 8 karaktere i gjatë.");
      setRegisterSuccess(false);
    } else {
      setPasswordError(null);
      dispatch(addStudent({ NID, name, surname, password, courses: [] }));
      setRegisterSuccess(true);
    }
  }

  return (
    <div>
      <div id='containerDiv'>
        <div id='infoDiv'> 
          <h2>Plotesoni te dhenat e meposhtme 
            per t’u rregjistruar ne sistemin 
            e menaxhimit te studenteve:
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div id='threeSeparator'>
            <div className='goingDown' id='leftForm'>
              <div id='divNID'>
                <label id='labelNID'>NID studenti*</label>
                <input className='input' type="text" value={NID} onChange={(e) => setNID(e.target.value)} required />
              </div>
              <div id='divPassword'>
                <label id='labelPassword'>Fjalekalimi*</label>
                <input className='input' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            </div>
            <div className='goingDown' id='middleForm'>
              <div id='divName'>
                <label id='labelName'>Emer Studenti</label>
                <input className='input' type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div id='divSurname'>
                <label id='labelSurname'>Mbiemer Studenti</label>
                <input className='input' type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
              </div>
            </div>
            <div className='goingDown'>
              <button type="submit" className='formButton'>Register</button>
            </div>
          </div>
        </form>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        {registerSuccess && <p style={{ color: "green" }}>Urime, ju jeni regjistruar!</p>}
      </div>
      <div className='image-container'>
        <img alt='' src={StudentsOutside} className="cropped-image"/>
      </div>
    </div>
  );
}

export default RegistrationForm;
