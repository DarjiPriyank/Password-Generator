import React, { Component } from 'react';
import './PasswordStrengthMeter.css';
import zxcvbn from 'zxcvbn';


class PasswordStrengthMeter extends Component {
  constructor() {
    super();  
    this.state = {
      imageUrl: "",
     
    }
   }
  

  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Worst';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'None';
    }
  }

  render() {
    const { password } = this.props;
    const testedResult = zxcvbn(password);
    console.log(this.createPasswordLabel(testedResult))
    return (
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
          value={testedResult.score}
          max="4"
          />
        <br />
        
          
        <label
          className="password-strength-meter-label"
        > <strong>Password strength: </strong>
          {password && (
            <h5 className={this.createPasswordLabel(testedResult).toLowerCase()}>
               {this.createPasswordLabel(testedResult)}   
            </h5>
          )}
        </label>
      </div>
    );
  }
}

export default PasswordStrengthMeter;