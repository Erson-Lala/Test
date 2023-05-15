import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, populateStudents } from '../Redux/studentSlice';
import './StudentList.css' 
import data from '../data/defaultData.json'; // adjust path as necessary

const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(populateStudents(data))
  }, [dispatch]);


  const handleDelete = (NID) => {
    dispatch(deleteStudent(NID));
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>NID studenti</th>
            <th>Emer studenti</th>
            <th>Mbiemer studenti</th>
            <th>Nr i lendeve te bera subscribe</th>
            <th>Modifiko</th>
            <th>Fshi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.NID}>
              <td>{student.NID}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.numberOfSubscribedSubjects}</td>
              <td className='tdLink'><Link id='link' to={`/students/${student.NID}`}>Edit</Link></td>
              <td className='tdDelete'><button className='deleteButton formButton' onClick={() => handleDelete(student.NID)}>X</button></td>
            </tr>
          ))}
            <tr>
    <td></td>
    <td></td>
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
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
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
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
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
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
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
    <td></td>
    <td></td>
  </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
