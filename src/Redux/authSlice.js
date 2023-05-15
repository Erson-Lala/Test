
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  error: null,
  currentUser: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.currentUser = action.payload;
      state.error = null;
    },
    loginFailed: (state, action) => {
      state.error = 'Invalid NID or password';
    },
    logout: (state) => {
      state.loggedIn = false;
      state.currentUser = null;
      state.error = null;
    },
  },
});

export const { login, logout, loginFailed } = authSlice.actions;

export default authSlice.reducer;
