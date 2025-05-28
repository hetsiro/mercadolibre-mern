import { AuthLayout } from '../layout/AuthLayout'
import { RegisterForm } from '../components/formik/RegisterForm'

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  )
}
