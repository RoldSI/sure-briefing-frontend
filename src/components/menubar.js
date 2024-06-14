import React from "react";
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { setUser, signOutUser } from '../store/user';
import { useDispatch, useSelector } from 'react-redux';

function Menubar() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">SURE Briefing</Link>
        </li>
      </ul>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <Link to="/account" className="text-white">Account</Link>
            {/* <span className="text-white">Welcome, {user.email}</span> */}
            <button
              onClick={() => dispatch(signOutUser())}
              className="text-white bg-red-500 px-4 py-2 rounded"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/signin" className="text-white bg-blue-500 px-4 py-2 rounded">
              Sign In
            </Link>
            <Link to="/signup" className="text-white bg-blue-500 px-4 py-2 rounded">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Menubar;
