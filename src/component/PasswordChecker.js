import React, { Component } from 'react'
import PasswordStrengthMeter from "./PasswordStrengthMeter";


export class PasswordChecker extends Component {
    constructor() {
        super();
        this.state = {
          password: '',
        }
      }
    render() {
        const { password } = this.state;
        return (
            <div className="meter">
                <input autoComplete="off" type="password" onChange={e => this.setState({ password: e.target.value })} />
                <PasswordStrengthMeter password={password}/>
            </div>
        )
    }
    
}


export default PasswordChecker
