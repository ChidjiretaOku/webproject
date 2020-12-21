import React from 'react'
import {Component} from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password:'',
            username:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({password: event.target.password});
        this.setState({username: event.target.username});
    }

    handleSubmit(event) {
        alert('Отправленное имя: ' + this.state.password + this.state.username);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" value={this.state.password} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

export default LoginForm