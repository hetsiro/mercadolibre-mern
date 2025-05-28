import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useNavigate } from 'react-router';
import { startRegisterUser } from '../../../store/auth/authThunks';
import { useDispatch } from 'react-redux';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  password: yup
    .string('Enter your password')
    .min(8, 'Must be at least 8 characters long')
    .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
    .matches(/[\d\W]/, 'Must contain at least one number or symbol')
    .required('Password is required'),

  passwordRepeat: yup.string()
    .required('Please repeat your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: 'test@test.com',
      password: 'Test123.',
      passwordRepeat: 'Test123.',
    },
    validationSchema: validationSchema,
    onSubmit: ({email, password}) => {
      dispatch(startRegisterUser({email, password}))
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNavigateToLogin = () => {
    navigate('/login')
  }

  const handleNavigateToRecovery = () => {
    navigate('/recovery')
  }

  return (
    <Box
      component='form'
      onSubmit={formik.handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gap: 2,
      }}
    >
      <Typography variant='h5'>Register</Typography>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth
        id="passwordRepeat"
        name="passwordRepeat"
        label="Repeat Password"
        type="password"
        value={formik.values.passwordRepeat}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.passwordRepeat && Boolean(formik.errors.passwordRepeat)}
        helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
      />
      <Button fullWidth color="primary" variant="contained" type="submit" sx={{ mt: 2 }}>
        REGISTER
      </Button>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          gap: 2
        }}
      >
        <Button fullWidth variant="contained" onClick={handleNavigateToLogin} sx={{ backgroundColor: theme.palette.primary.light }}>
          {isXs ? 'Login' : 'Go to Login'}
        </Button>
        <Button fullWidth variant="contained" onClick={handleNavigateToRecovery} sx={{ backgroundColor: theme.palette.primary.light }}>
          {isXs ? 'Recovery' : 'Password Recovery'}
        </Button>
      </Box>
    </Box>
  );
};