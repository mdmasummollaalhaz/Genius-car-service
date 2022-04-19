import React from 'react';
import {
  useAuthState,
  useSendEmailVerification,
} from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './RequireAuth.css';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  // console.log('Inside require auth', user);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className='verify'>
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h5 className="text-success">Please verify your email address.</h5>
        <button className='btn'
          onClick={async () => {
            await sendEmailVerification();
            toast('Sent email');
          }}
        >
          Send Verification email Again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
