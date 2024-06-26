import * as React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./components/Home";
import '../assets/main.css';

const App = () => {  
  return (
    <AuthProvider>
      <Router>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>   
    </AuthProvider>
  );
};

const root = document.getElementById("app");
createRoot(root).render(
    <App />
);
