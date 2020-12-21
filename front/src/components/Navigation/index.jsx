import {Component} from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        )
    }

}

export default Navbar
