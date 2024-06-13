import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './store/user';
import LandingSite from "./pages/landing";
import Menubar from "./components/menubar";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import AccountSite from './pages/account';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Menubar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingSite />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/account" element={<AccountSite />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
