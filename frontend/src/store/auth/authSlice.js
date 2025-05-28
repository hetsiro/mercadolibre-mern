import { createSlice } from '@reduxjs/toolkit';
import { AUTH_STATUS } from '../../auth/components/withStatus/authStatus';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  status: localStorage.getItem('status') || AUTH_STATUS.IDLE, // success | checking | error | idle
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.status = AUTH_STATUS.SUCCESS;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = AUTH_STATUS.IDLE;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    }
  }
});

export const { login, logout, setStatus, setError } = authSlice.actions;
export default authSlice.reducer;