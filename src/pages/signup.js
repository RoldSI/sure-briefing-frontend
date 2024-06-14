import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpWithEmail } from '../store/user';
import { useNavigate } from 'react-router-dom';

function SignUpSite() {
  const dispatch = useDispatch();
  const { status, error, user } = useSelector(state => state.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    dispatch(signUpWithEmail({ email, password }));
  };

  useEffect(() => {
    if (user) {
      navigate('/account');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Sign up with Email
          </button>
        </form>
        {status === 'loading' && <p className="mt-4 text-center text-blue-500">Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">There was an error signing up. Please try again.</p>}
      </div>
    </div>
  );
}

export default SignUpSite;