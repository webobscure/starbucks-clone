import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../server/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Form from './Form';

export default function Auth() {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(console.log)
    .catch(console.error)
  };

  return (
    <div>
      <Form title='Sign in' handleClick={handleLogin} />
    </div>
  );
}
