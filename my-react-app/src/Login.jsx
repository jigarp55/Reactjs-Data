import React from 'react';
import { signInWithPopup } from 'firebase/auth'; // Import from firebase/auth
import { auth, provider } from './Firebase/Firebase';
import { useDispatch } from 'react-redux';
import { setUser } from './slice/userSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // Call the function this way
      const user = result.user;
      dispatch(setUser(user));
    } catch (error) {
      console.error('Login error: ', error);
    }
  };

  return (
    <button onClick={handleLogin}>Login with Google</button>
  );
};

export default Login;
