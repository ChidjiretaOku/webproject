import React, {Component} from 'react'
import main from "../images/main.jpg"
import vinush_examples from "../vinushes/vinush_examples";
import 'bootstrap/dist/css/bootstrap.css'
import './CSS/style.css'
import VinushList from "./Vinush_list";
import {connect} from "react-redux"

class Api extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="container">
                <div className="bg-light">
                    <div className="text-right">Logged as: {this.props.username}</div>
                    <span className="display-1 text-danger">Vinush</span>
                    <span>find <span className='text-danger'>vinush</span> and drink <span
                        className='text-danger'>anush</span></span>
                </div>
                <div>
                    <img src={main} className="img_width"/>
                </div>
                <div>
                    <span className="display-4 bottom_margin"> Здесь вы можете найти отзывы на любые вина мира!</span>

                </div>
                <VinushList vinushes={vinush_examples}/>
            </div>
        )
    }

}

export default connect(
    state => ({
        registered: state.registerReducer,
        logged: state.loginReducer,
        username: state.usernameReducer
    }),
    dispatch => ({})
)(Api)
