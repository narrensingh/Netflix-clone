import React, { useRef } from 'react';
import './SignIn.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../firebase';

const SignIn = () => {
  const passwordRef = useRef(null);
  const emailref = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordRef.current.value
      );
      console.log(userCredential);
      console.log('Registration successful!');
    } catch (err) {
      console.log(err.message);
    }
  };
  const signin = async (e) => {
    e.preventDefault();
    try {
      const usercredential = await signInWithEmailAndPassword(
        auth,
        emailref.current.value,
        passwordRef.current.value
      );
      console.log(usercredential);
      console.log('Logged In!');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signin">
      <h1 className="header">Sign In</h1>
      <form>
        <input type="email" placeholder="email" ref={emailref} />
        <input type="password" placeholder="password" ref={passwordRef} />
        <button type="submit" onClick={signin}>
          Sign In
        </button>
        <h3>
          <span className="grey__text">New to Netflix?</span>
          <span className="white__text" onClick={register}>
            {' '}
            Sign Up Now.
          </span>
        </h3>
      </form>
    </div>
  );
};

export default SignIn;
