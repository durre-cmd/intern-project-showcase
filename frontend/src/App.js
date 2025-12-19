import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import './styles/App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showRegister, setShowRegister] = useState(false);

  if (!token) {
    return showRegister ? (
      <div>
        <Register />
        <div className="switch-auth">
  Already have an account? 
  <button onClick={() => setShowRegister(false)}>Login</button>
</div>

      </div>
    ) : (
      <div>
        <Login setToken={setToken} />
        
        <div className="switch-auth">
  Don't have an account? 
  <button onClick={() => setShowRegister(true)}>Register</button>
</div>

      </div>
    );
  }

  return (
    <div className="container">
      <h1>Intern Project Showcase</h1>
      <ProjectForm />
      <ProjectList />
      <button
        onClick={() => {
          localStorage.removeItem('token');
          localStorage.removeItem('username');
          setToken(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default App;
