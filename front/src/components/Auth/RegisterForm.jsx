import React, {Component} from "react";
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom";

class registerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handlerU = this.handlerU.bind(this);
        this.handlerP = this.handlerP.bind(this);
        this.submit = this.submit.bind(this)
        this.handleRegister = this.handleRegister.bind(this)

    }

    submit() {
        const username = this.username
        const password = this.password
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: username, password: password}),
        }


        fetch('/api/register', requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error || data.message === "Missing credentials") {
                    console.log("error", data.error)
                } else {
                    this.handleRegister()
                    console.log("success", data.message + "! \nRedirecting to login...")
                }
            })

    }


    render() {
        if (this.props.registered) {
            return <Redirect to="/login"/>
        } else {
            return (
                <div className='container-fluid mainBack'>
                    <div className='display-1 text-danger'>
                        Vinush
                    </div>
                    <div className="container-md loginBg">
                        <div className="mb-3">
                            <label className="form-label font-weight-bold">Username</label>
                            <input placeholder="Username" name="username" required className='loginInput form-control'
                                   onChange={this.handlerU}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label font-weight-bold">Password</label>
                            <input placeholder="Password" type="password" className='loginInput form-control' name="password"
                                   required
                                   onChange={this.handlerP}/>
                        </div>


                        <button className="loginInput rounded-pill btn-lg" onClick={this.submit}>Register</button>
                        <button className="loginInput rounded-pill btn-lg" onClick={this.handleRegister}>I already have a profile</button>

                    </div>
                </div>

            )
        }

    }

    handlerU(e) {
        this.username = e.target.value

    }

    handlerP(e) {
        this.password = e.target.value

    }

    handleRegister() {
        console.log('touched')
        this.props.onRegister(this.props.registered)
    }

}

export default connect(
    state => ({
        registered: state.registerReducer
    }),
    dispatch => ({
        onRegister: (state) => {
            dispatch({type: "REGISTER", payload: state})
        }
    })
)(registerForm)