import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingSite from "./pages/landing";
import Menubar from "./components/menubar";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Menubar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingSite />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
