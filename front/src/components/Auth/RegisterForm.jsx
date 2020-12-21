import React, {Component} from "react";

class registerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.handlerU = this.handlerU.bind(this);
        this.submit = this.submit.bind(this)

    }

    submit() {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({username: this.username, password: "tjhjhg"}),
        }

        console.log(this.username)

        fetch('/api/register', requestOptions)
            .then(res => res.json())
            .then(data => {
                if (data.error || data.message === "Missing credentials") {
                    console.log("error", data.error)
                } else {
                    console.log("success", data.message + "! \nRedirecting to login...")
                }
            })

    }

    render() {
        return (
            <div className="container">
                <form>
                    <label>
                        <input placeholder="Username" name="username" required onChange={this.handlerU}/>
                    </label>

                    <label>
                        <input placeholder="Password" type="password" name="password" required/>
                    </label>

                    <button onClick={this.submit} color="primary" variant="outlined">Register</button>

                </form>
            </div>
        )

    }

    handlerU(e) {
        this.username = e.target.value
    }

    handlerP(e) {
        this.password = e.target.value
    }
}

export default registerForm