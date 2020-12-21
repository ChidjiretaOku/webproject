import React from 'react'
import thunk from "redux-thunk";
import vinush_examples from "../vinushes/vinush_examples";
import 'bootstrap/dist/css/bootstrap.css'
import './CSS/style.css'
import AuthBtn from "./Buttons/authBtn";
import VinushList from "./Vinush_list";
import LoginForm from "./Auth/Login";
import {
    BrowserRouter as Router,
    Switch,
    Route, Link, Redirect,
} from "react-router-dom";


function App() {
    return (
        <div className="container-fluid">
            {/*<nav className='navbar navbar-expand-lg main_background rounded'>*/}
            {/*    <div>*/}
            {/*        <span className='navbar-brand'>Vinush</span>*/}
            {/*        <span className='navbar-text'>find vinush and drink anush</span>*/}
            {/*        <form className="d-flex">*/}
            {/*            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
            {/*            <button className="btn btn-outline-success" type="submit"> Search</button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</nav>*/}

            {/*<p>
                <button className="btn" type="button">
                    Button with data-bs-target
                </button>
            </p>
            <div>
                <div className="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </div>*/}
            <AuthBtn/>


            <VinushList vinushes={vinush_examples}/>
        </div>


        // <div className="card">
        //     <LoginForm/>
        // </div>

    )
}

export default App