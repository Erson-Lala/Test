import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStudent } from '../Redux/studentSlice';

const DeleteConfirmation = ({ studentId, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudent(studentId));
    onClose();
  };

  return (
    <div>
      <p>Are you sure you want to delete this student?</p>
      <button onClick={handleDelete}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  );
};

export default DeleteConfirmation;
