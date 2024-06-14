import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from './store/user';
import LandingSite from "./pages/landing";
import Menubar from "./components/menubar";
import SignInSite from "./pages/signin";
import SignUpSite from "./pages/signup";
import AccountSite from './pages/account';
import AuthenticatedRoute from './components/authenticated_route';

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
            <Route path="/signin" element={<SignInSite />} />
            <Route path="/signup" element={<SignUpSite />} />
            <Route path="/account" element={<AuthenticatedRoute><AccountSite/></AuthenticatedRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
