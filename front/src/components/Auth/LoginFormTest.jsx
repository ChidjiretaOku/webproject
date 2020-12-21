import {Component} from "react";
import React from "react";
import {connect} from "react-redux";
import userProfile from "../profile/profile"
import Auther from "../Auther";

class LoginFormTest extends Component {

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
                    return (<></>)
                }
            })

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('hocu obnovlene')
        console.log(this.props.auth_toggled)
        if (this.props.auth_toggled) {
            console.log('ama gey')
        }


    }

    render() {

        return (
            <form className="container">
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="username" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"/>
                </div>
                <button onClick={this.submit()}>kek button</button>
            </form>
        )
    }
}

export default LoginFormTest

/*
export default connect(
    state => ({
        auth_toggled: state
    }),
    dispatch => ({})
)(LoginFormTest)*/
