import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('students')) || [];

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { NID, name, surname, numberOfSubscribedSubjects } = action.payload;
      const existingStudent = state.find(student => student.NID === NID);

      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.surname = surname;
        existingStudent.numberOfSubscribedSubjects = numberOfSubscribedSubjects;
      }
    },
    deleteStudent: (state, action) => {
      const index = state.findIndex(student => student.NID === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
})

export const { addStudent, updateStudent, deleteStudent } = studentSlice.actions;

export default studentSlice.reducer;
