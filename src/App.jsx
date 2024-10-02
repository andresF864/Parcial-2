import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import GitIgnoreInstructions from './components/GitIgnoreInstructions';
import Home from './components/Home';
import Projects from './components/Projects';
import './styles.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/projects">Proyectos</Link>
        <Link to="/gitignore">Instrucciones GitIgnore</Link> 
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gitignore" element={<GitIgnoreInstructions />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;