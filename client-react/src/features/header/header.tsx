import { Link } from "react-router-dom";

const Header = (props: any) => {
  return (
    <div className='flex flex-row justify-between p-3 bg-gray-500'>
      <div>
        <Link to='/' className='text-lg font-bold'>
          GitTix
        </Link>
      </div>
      <div>
        <ul className='flex gap-2'>
          <li>
            <Link to='auth/signup' className='text-lg font-bold'>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to='auth/signin' className='text-lg font-bold'>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
