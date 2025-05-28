import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export function SnackAlertSuccess( ) {

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Logged successfully
                </Alert>
            </Snackbar>
        </div>
    );
}