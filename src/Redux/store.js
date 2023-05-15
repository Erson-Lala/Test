import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    students: studentReducer,
    auth: authReducer,
  },
});
