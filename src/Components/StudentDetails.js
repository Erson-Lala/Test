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

  const handleSave = () => {
    if (student) {
      const updatedStudent = {
        ...student,
        grade: grade,
        profession: profession,
        education: education,
        courses: courses
      };
  
      dispatch(updateStudent(updatedStudent));
    }
  }

  return (
    <div className='container'>
      <h2>Student Details</h2>
      <table>
        <tr>
          <td>NID:</td>
          <td>{student ? student.NID : ""}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>{student ? student.name : ""}</td>
        </tr>
        <tr>
          <td>Average Grade:</td>
          <td><input value={grade} onChange={(e) => setGrade(e.target.value)} /></td>
        </tr>
        <tr>
          <td>Desired Profession:</td>
          <td><input value={profession} onChange={(e) => setProfession(e.target.value)} /></td>
        </tr>
        <tr>
          <td>School:</td>
          <td><input value={education} onChange={(e) => setEducation(e.target.value)} /></td>
        </tr>
      </table>

      <button onClick={handleSave}>Save Changes</button>

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
        {courses && Array.isArray(courses) && courses.map((course, index) => (
          <tr key={course.name}>
            <td><input value={course.name} onChange={(e) => {
              let updatedCourses = [...courses];
              updatedCourses[index].name = e.target.value;
              setCourses(updatedCourses);
            }} /></td>
            <td><input type="checkbox" checked={course.subscribed} onChange={(e) => {
              let updatedCourses = [...courses];
              updatedCourses[index].subscribed = e.target.checked;
              setCourses(updatedCourses);
            }} /></td>
            <td><input value={course.subscribeDate} onChange={(e) => {
              let updatedCourses = [...courses];
              updatedCourses[index].subscribeDate = e.target.value;
              setCourses(updatedCourses);
            }} /></td>
            <td><input value={course.otherInfo} onChange={(e) => {
              let updatedCourses = [...courses];
              updatedCourses[index].otherInfo = e.target.value;
              setCourses(updatedCourses);
            }} /></td>
            </tr>
          ))}
          <tr>
            <textField></textField>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          </tbody>
        </table>
  
        <button onClick={handleSave}>Save Changes</button>
      </div>
    );
  }
  
  export default StudentDetails;
