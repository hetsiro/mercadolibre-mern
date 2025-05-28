import { login, setStatus, setError } from './authSlice';
import { API_URL } from '../../config/api';
import { AUTH_STATUS } from '../../auth/components/withStatus/authStatus';
import { withSweetAlertRecovery } from '../../auth/components/withSweetalert/withSweetAlertRecovery';
import { withSweetAlertRecoverySuccess } from '../../auth/components/withSweetalert/withSweetAlertRecoverySuccess';

export const startLoginUser = (credentials) => {
    return async (dispatch) => {
        try {
            dispatch(setStatus(AUTH_STATUS.CHECKING));
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });

            const data = await res.json();

            if (!res.ok) {
                dispatch(setError(data.message));
                dispatch(setStatus(AUTH_STATUS.ERROR));
                return;
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            // await new Promise(() => {
            //     setTimeout(() => {
            //         dispatch(loginSuccess(data));
            //     }, 1000);
            // })
            dispatch(login(data));
        } catch (err) {
            dispatch(setError('Server offline'));
            dispatch(setStatus(AUTH_STATUS.ERROR));
        }
    };
};

export const startRegisterUser = (formData) => {
    return async (dispatch) => {
        try {
            dispatch(setStatus(AUTH_STATUS.CHECKING));
            const res = await fetch(`${API_URL}/api/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (!res.ok) {
                dispatch(setError(data.message));
                dispatch(setStatus(AUTH_STATUS.ERROR));
                return;
            }

            dispatch(startLoginUser(formData));
        } catch (err) {
            dispatch(setError('Server offline'));
            dispatch(setStatus(AUTH_STATUS.ERROR));
        }
    };
};

export const startRecoveryPassword = (email) => {
    return async (dispatch) => {
        try {
            dispatch(setStatus(AUTH_STATUS.CHECKING));
            const res = await fetch('http://localhost:5000/api/auth/recovery-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            const data = await res.json();
            withSweetAlertRecovery(data);
            dispatch(setStatus(AUTH_STATUS.IDLE));
        } catch (err) {
            dispatch(setError('Server offline'));
            dispatch(setStatus(AUTH_STATUS.ERROR));
        }
    };
};

export const startResetPassword = ({ password, token }) => {
    return async (dispatch) => {
        try {
            dispatch(setStatus(AUTH_STATUS.CHECKING));
            const res = await fetch(`http://localhost:5000/api/auth/reset-password/${token}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password }),
            });

            const data = await res.json();

            if (!res.ok) {
                dispatch(setError(data.message));
                dispatch(setStatus(AUTH_STATUS.ERROR));
                return;
            }
            withSweetAlertRecoverySuccess('/login');
            dispatch(setStatus(AUTH_STATUS.IDLE));
        } catch (err) {
            dispatch(setError('Server offline'));
            dispatch(setStatus(AUTH_STATUS.ERROR));
        }
    };
};
