import React from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/rent" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  )


}