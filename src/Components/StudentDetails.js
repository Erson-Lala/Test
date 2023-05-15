import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateStudent } from '../Redux/studentSlice';
import './StudentDetails.css'

const StudentDetails = () => {
  const { NID } = useParams();
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
        grade,
        profession,
        education,
        courses,
      };
  
      dispatch(updateStudent(updatedStudent));
    }
  }

  return (
    <div className='container'>
      <h2>Editoni nje student tek "Studentet" per te pare Detajet</h2>
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
          {courses.map((course, index) => (
            <tr key={index}>
              <td>
                <input
                  value={course.name}
                  onChange={(e) =>
                    setCourses(courses.map((c, i) => (i === index ? { ...c, name: e.target.value } : c)))
                  }
                />
              </td>
              <td>
                <input
                  value={course.subscribed}
                  onChange={(e) =>
                    setCourses(courses.map((c, i) => (i === index ? { ...c, subscribed: e.target.value } : c)))
                  }
                />
              </td>
              <td>
                <input
                  value={course.subscribeDate}
                  onChange={(e) =>
                    setCourses(courses.map((c, i) => (i === index ? { ...c, subscribeDate: e.target.value } : c)))
                  }
                />
              </td>
              <td>
                <input
                  value={course.otherInfo}
                  onChange={(e) =>
                    setCourses(courses.map((c, i) => (i === index ? {...c, otherInfo: e.target.value } : c)))
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <button className='formButton' onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default StudentDetails;
