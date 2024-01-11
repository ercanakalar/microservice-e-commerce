import { Link } from 'react-router-dom';
import FormInput from '../../../components/form-input/form-input';
import SubmitButton from '../../../components/submit-button/submit-button';

const SignupPage = (props: any) => {
  const changeInputHandler = (event: any) => {
    console.log(event.target.value);
  };
  return (
    <div className='flex justify-center flex-wrap bg-auth-background bg-no-repeat bg-cover h-screen signIn-card'>
      <div className='inline justify-center rounded-md container w-[32rem] m-4 bg-white'>
        <form className='flex flex-col items-center gap-6 w-full'>
          <div>
            <span className='flex justify-center text-4xl font-extrabold font-poppins p-6'>
              Sign Up
            </span>
          </div>
          <div className='inline-grid gap-6 w-3/4'>
            <div className='flex gap-2'>
              <FormInput
                inputId='firstName'
                type='text'
                placeHolder='First Name'
                labelName='First Name'
                icon='/icons/user.svg'
                onChangeInput={changeInputHandler}
              />
              <FormInput
                inputId='lastName'
                type='text'
                placeHolder='Last Name'
                labelName='Last Name'
                icon='/icons/user.svg'
                onChangeInput={changeInputHandler}
              />
            </div>
            <FormInput
              inputId='email'
              type='email'
              placeHolder='E-mail'
              labelName='E-mail'
              icon='/icons/email.svg'
              onChangeInput={changeInputHandler}
            />
            <FormInput
              inputId='password'
              type='password'
              placeHolder='Password'
              labelName='Password'
              icon='/icons/lock.svg'
              onChangeInput={changeInputHandler}
            />
            <FormInput
              inputId='confirmPassword'
              type='password'
              placeHolder='Confirm Password'
              labelName='Confirm Password'
              icon='/icons/lock.svg'
              onChangeInput={changeInputHandler}
            />
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
        <div className='flex flex-col justify-between relative top-[5%] h-[25%]'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <span>Or Sign In Using</span>
            <Link
              className='flex h-12 w-12 items-center justify-center rounded-full font-poppins font-bold bg-red-500 text-white'
              to='/auth/google'
            >
              <p className='text-2xl'>G</p>
            </Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-6'>
            <span>Or Sign In Using</span>
            <Link
              className='flex h-full w-full items-center justify-center font-semibold hover:text-indigo-600'
              to='/auth/signin'
            >
              SIGN In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
