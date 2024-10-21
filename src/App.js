import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert'; // Import your custom Alert component

function App() {
  const [mode, setMode] = useState('dark'); // Initially set to 'dark'
  const [showAbout, setShowAbout] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [alert, setAlert] = useState(null);

  // Function to show alerts
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Clear the alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  useEffect(() => {
    // Set initial background color based on mode
    document.body.style.backgroundColor = mode === 'dark' ? '#042743' : 'white';
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'dark-mode';
      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils now";
      }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowHome(false);
  };

  const handleShowHome = () => {
    setShowHome(true);
    setShowAbout(false);
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        showAbout={handleShowAbout}
        showHome={handleShowHome}
      />
      <Alert alert={alert} /> {/* Display the alert */}
      <div className="container my-3">
        {showHome && <TextForm showAlert={showAlert} heading="Enter Text To Analyze" mode={mode} />}
        {showAbout && <About />}
      </div>
    </>
  );
}

export default App;
