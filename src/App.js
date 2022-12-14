import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(36 74 104)';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("White mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TEXTUTILS" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
