import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteStudent, populateStudents } from '../Redux/studentSlice';
import './StudentList.css' 
import data from '../data/defaultData.json';

const StudentList = () => {
  const students = useSelector((state) => state.students);
  const [emptyRows, setEmptyRows] = useState(8);
  const dispatch = useDispatch();

  useEffect(() => {
    if (students.length === 0) {
      dispatch(populateStudents(data));
    }
  }, [dispatch, students]);



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
              <td className='tdLink'><Link id='link' to={`/students/${student.NID}`}><div className='link-content'>Edit</div></Link></td>
              <button className='deleteButton formButton' onClick={() => handleDelete(student.NID)}>X</button>
            </tr>
          ))}
            {Array.from({length: emptyRows}).map((_, index) => (
            <tr key={`empty-${index}`}>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
