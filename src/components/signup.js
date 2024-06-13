import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpWithEmail } from '../store/user';

function SignUp() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    dispatch(signUpWithEmail({ email, password }));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form onSubmit={handleEmailSignUp} className="mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input mb-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input mb-2"
        />
        <button type="submit" className="btn btn-primary">Sign up with Email</button>
      </form>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div> 
  );
}

export default SignUp;