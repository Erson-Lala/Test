import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateStudent } from '../Redux/studentSlice';
import './StudentDetails.css'

const StudentDetails = () => {
  const { NID } = useParams(); // get the NID from the URL
  const dispatch = useDispatch();
  const student = useSelector(state => state.students.find(student => student.NID === NID));
  
  const [grade, setGrade] = useState(student ? student.grade : "");
  const [profession, setProfession] = useState(student ? student.profession : "");
  const [education, setEducation] = useState(student ? student.education : "");
  const [courses, setCourses] = useState(student ? student.courses : []);
  const [subject, setSubject] = useState(student ? student.subject : []);
  const [subscribe, setSubscribe] = useState(student ? student.subscribe : []);
  const [date, setDate] = useState(student ? student.date : []);
  const [otherInfo, setOtherInfo] = useState(student ? student.otherInfo : []);

  const handleSave = () => {
    if (student) {
      const updatedStudent = {
        ...student,
        grade: grade,
        profession: profession,
        education: education,
        courses: courses,
        subject: subject,
        subscribe: subscribe,
        date: date,
        otherInfo: otherInfo,
      };
  
      dispatch(updateStudent(updatedStudent));
    }
  }

  return (
    <div className='container'>
      <h2>Detajet e Studentit</h2>
      <table>
        <tr>
          <td>NID studenti</td>
          <td>{student ? student.NID : ""}</td>
        </tr>
        <tr>
          <td>Emer studenti</td>
          <td>{student ? student.name : ""}</td>
        </tr>
        <tr>
          <td>Nota mesatare</td>
          <td><input value={grade} onChange={(e) => setGrade(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Profesioni i deshiruar</td>
          <td><input value={profession} onChange={(e) => setProfession(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Te dhena te pergjithshme shkollimi</td>
          <td><input value={education} onChange={(e) => setEducation(e.target.value)} /></td>
        </tr>
      </table>

      <button className='formButton' onClick={handleSave}>Save Changes</button>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Subscribe</th>
            <th>Date</th>
            <th>Other Info</th>
          </tr>
        </thead>
        <tbody>
          <tr className='tableRow'>
            <td> 
            <input value={subject} onChange={(e) => setSubject(e.target.value)} />
            </td>
            <td><input value={subscribe} onChange={(e) => setSubscribe(e.target.value)} /></td>
            <td><input value={date} onChange={(e) => setDate(e.target.value)} /></td>
            <td><input value={otherInfo} onChange={(e) => setOtherInfo(e.target.value)} /></td>
            </tr>
          </tbody>
        </table>
  
        <button className='formButton' onClick={handleSave}>Save Changes</button>
      </div>
    );
  }
  
  export default StudentDetails;
