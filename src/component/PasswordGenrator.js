import React, { Component } from 'react'

class PasswordGenrator extends Component {
    constructor() {
        super()
        this.state = {
            password: { length: 12, data: "" },
            copySuccess: "",
            upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lower: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '~!@#$%^&*_-+?.:;',
            hasUpper: true,
            hasLower: true,
            hasNumber: true,
            hasSymbol: true,
            generatedPassword: "",
        }
    }
    

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    //this.setState({ [e.target.name] : e.target.value });
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.checked
        });
    }
    //  {
    //     let isChecked = e.target.checked;
    //     console.log(isChecked)
    // }
    setLength = ({ value }) => {
        this.setState(({ progress, password }) => ({
            password: { ...password, length: value }
        }),
            //   () => this.buildPassword()
        );
    }
    onSubmit = (e) => {
        const len = this.state.password.length;
        this.generatePassword(len, this.state.hasUpper, this.state.hasLower, this.state.hasNumber, this.state.hasSymbol);
    }
    generatePassword = (length, upper, lower, numbers, symbols) => {
        let pass = "";
        let list = "";
        (upper === true) ? list += this.state.upper : list += "";
        (lower === true) ? list += this.state.lower : list += "";
        (numbers === true) ? list += this.state.numbers : list += "";
        (symbols === true) ? list += this.state.symbols : list += "";
        for (let ma = 0; ma < length; ma++) {
            pass += list[Math.floor(Math.random() * list.length)];
        }
        console.log(pass);
        this.setState(state => ({ password: { ...state.password, data: pass } }));
    };
    copyToClipboard = (e) => {
        this.textArea.select();
        // select(this.state.password.data);
        document.execCommand('copy');
        e.target.focus();
        this.setState({ copySuccess: 'Copied!' });
        alert("Copied!");
    }
    render() {
        return (
            <div>
                <input type="text"
                    ref={(textarea) => this.textArea = textarea}
                    value={this.state.password.data}
                    onChange={this.onChange}
                    className="form-control"
                    disable="true"
                /><button onClick={this.copyToClipboard} className="btn btn-default">Copy</button>
                {this.state.copySuccess}
                <br />
                <input
                    type="range"
                    min="6"
                    max="25"
                    defaultValue={this.state.password.length}
                    onChange={e => this.setLength(e.target)}
                />{this.state.password.length}
                {/* <Checkbox otherProps onChange={this.handleChange()} /> */}<br />
                UpperCase:<input
                    type="checkbox"
                    name="hasUpper"
                    onChange={this.handleChange}
                    checked={this.state.hasUpper}
                />
                <br />
                LowerCase:<input
                    type="checkbox"
                    name="hasLower"
                    onChange={this.handleChange}
                    checked={this.state.hasLower}
                />
                <br />
                Number:<input
                    type="checkbox"
                    name="hasNumber"
                    onChange={this.handleChange}
                    checked={this.state.hasNumber}
                /><br />
                Symbols:<input
                    type="checkbox"
                    name="hasSymbol"
                    onChange={this.handleChange}
                    checked={this.state.hasSymbol}
                /><br />
                <button onClick={this.onSubmit} className="btn btn-primary">Generate</button>
            </div>
        )
    }
}

export default PasswordGenrator


export const getRandomElement = array => {
    return array[Math.floor(getRandomSecure() * array.length)];
};
export const getRandomSecure = () =>
    window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;