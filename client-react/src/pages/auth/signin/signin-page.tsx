import './Signin.css';
import { Link } from 'react-router-dom';

import FormInput from '../../../components/form-input/form-input';
import SubmitButton from '../../../components/submit-button/submit-button';

const SigninPage = (props: any) => {
  const changeInputHandler = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <div className='flex justify-center flex-wrap bg-auth-background bg-no-repeat bg-cover h-screen signIn-card'>
      <div className='inline justify-center rounded-md container w-[32rem] m-4 bg-white'>
        <form className='flex flex-col items-center gap-6 w-full'>
          <div>
            <span className='flex justify-center text-4xl font-extrabold font-poppins p-6 pt-12'>
              Sign In
            </span>
          </div>
          <div className='inline-grid gap-16 w-3/4'>
            <div>
              <FormInput
                inputId='email'
                type='email'
                placeHolder='E-mail'
                labelName='Email'
                src='public/icons/user.svg'
                onChangeInput={changeInputHandler}
              />
            </div>
            <div>
              <FormInput
                inputId='password'
                type='password'
                placeHolder='Password'
                labelName='Password'
                src='public/icons/lock.svg'
                onChangeInput={changeInputHandler}
              />
            </div>
          </div>
          <div className='flex justify-end w-3/4 text-sm opacity-70'>
            <Link to='/auth/forgot-password'>Forgot Password?</Link>
          </div>
          <div className='w-3/4'>
            <div className='wrap-button'>
              <div className='button-bg'></div>
              <SubmitButton type='submit' title='Sign In' />
            </div>
          </div>
        </form>
        <div className='flex flex-col justify-between relative top-[5%] h-[30%]'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <span>Or Sign Up Using</span>
            <Link
              className='flex h-12 w-12 items-center justify-center rounded-full font-poppins font-bold bg-red-500 text-white'
              to='/auth/google'
            >
              <p className='text-2xl'>G</p>
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-6'>
            <span>Or Sign Up Using</span>
            <Link
              className='flex h-full w-full items-center justify-center font-semibold hover:text-indigo-600'
              to='/auth/signup'
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
