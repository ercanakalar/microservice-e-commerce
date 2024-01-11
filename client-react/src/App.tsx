import { Route, Routes } from 'react-router-dom';

import SigninPage from './pages/auth/signin/signin-page';
import SignupPage from './pages/auth/signup/signup-page';
import ForgotPassword from './pages/auth/forgot-password/forgot-password';
import ResetPasswordPage from './pages/auth/reset-password/reset-password-page';
import Home from './pages/home/home';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='auth/signin' element={<SigninPage />} />
        <Route path='auth/signup' element={<SignupPage />} />
        <Route path='auth/reset-password' element={<ResetPasswordPage />} />
        <Route path='auth/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
