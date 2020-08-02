import React from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordGenrator from "./component/PasswordGenrator";
import PasswordChecker from "./component/PasswordChecker";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ width: "300px", padding: "20px", margin: "20px 0 0 0" }}>
              <h4>Password Generator</h4>
              <PasswordGenrator></PasswordGenrator>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ width: "300px", padding: "20px", margin: "20px" }}>
              <h4>Password Strength Tester</h4>
              <PasswordChecker></PasswordChecker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
