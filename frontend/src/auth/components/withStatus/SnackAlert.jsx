import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../../store/auth/authSlice';
import { useState } from 'react';

export function SnackAlert( ) {

    const [open, setOpen] = useState(true);
    const { error } = useSelector((state) => state.auth)

    const dispatch = useDispatch();


    const handleClose = () => {
        setOpen(false);
        dispatch(setError(null));
    };

    return (
        <div>
            <Snackbar open={open} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </div>
    );
}