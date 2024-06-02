import React from "react";
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white">Home</Link>
            </li>
            <li>
                <Link to="/about" className="text-white">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white">Contact</Link>
            </li>
        </ul>
    </nav>
  );
}

export default Menubar;