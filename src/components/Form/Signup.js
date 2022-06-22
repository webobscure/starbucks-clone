import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../server/store/slices/userSlice';
import { useDispatch } from 'react-redux';
import Form from './Form';

export default function Signup() {

  return (
    <div>
      <Form title='Sign up'/>
    </div>
  );
}
