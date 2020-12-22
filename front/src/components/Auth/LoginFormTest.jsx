import {Component} from "react";
import React from "react";
import {connect} from "react-redux";
import userProfile from "../profile/profile"
import Auther from "./Auther";
import {Redirect} from "react-router-dom";
import './style.css'

class LoginFormTest extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handlerU = this.handlerU.bind(this);
        this.handlerP = this.handlerP.bind(this);
        this.submit = this.submit.bind(this)

    }

    submit() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                credentials: 'include'
            },
            body: JSON.stringify({username: this.username, password: this.password}),
        }

        fetch('/api/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    console.log("error" + data.error)
                } else {
                    Auther.checkAuth()
                    userProfile.getUser()
                    this.handleLogin()
                }
            })

    }

    handlerU(e) {
        this.username = e.target.value
        console.log(this.username)

    }

    handlerP(e) {
        this.password = e.target.value
        console.log(this.password)
    }

    handleLogin() {
        console.log('touched')
        this.props.onLogin(this.props.logged)
    }

    render() {
        if (this.props.logged) {
            return <Redirect to="/api/main"/>
        } else {
            return (
                <div className='container-fluid mainBack'>
                    <div className='display-1 text-danger'>
                        Vinush
                    </div>
                    <div className="container-md loginBg">
                        <div className="mb-3">
                            <label className="form-label font-weight-bold">Username</label>
                            <input type="username" className="form-control loginInput" onChange={this.handlerU}
                                   placeholder="Username"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-weight-bold">Password</label>
                            <input className="form-control loginInput" type="password" onChange={this.handlerP}
                                   placeholder="Password"/>
                        </div>
                        <button className="loginInput rounded-pill btn-lg" onClick={this.submit}>Sign in</button>
                    </div>
                </div>
            )
        }
    }
}

export default connect(
    state => ({
        logged: state.loginReducer
    }),
    dispatch => ({
        onLogin: (state) => {
            dispatch({type: "LOGIN", payload: state})
        }
    })
)(LoginFormTest)
