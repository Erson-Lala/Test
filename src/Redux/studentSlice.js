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
      const index = state.findIndex(student => student.NID === action.payload.NID);
      if (index !== -1) {
        state[index] = action.payload;
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
