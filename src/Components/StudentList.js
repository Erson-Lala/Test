import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent } from '../Redux/studentSlice';
import './StudentList.css' 

const StudentList = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleDelete = (NID) => {
    dispatch(deleteStudent(NID));
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>NID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Nr of Subjects Subscribed</th>
            <th>Edit</th>
            <th>Delete</th>
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
              <td className='tdDelete'><button className='deleteButton' onClick={() => handleDelete(student.NID)}>X</button></td>
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
