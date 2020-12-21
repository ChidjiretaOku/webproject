import React, {Component} from 'react'
import {connect} from 'react-redux'


class reduxTest extends Component {

    authBtnClick(){
        console.log('touched')
        this.props.onButtonClick(this.props.auth_toggled)
    }

    render() {
        console.log(this.props.auth_toggled)
        return (
            <div>
                <button onClick={this.authBtnClick.bind(this)}>
                    touch
                </button>
            </div>
        )
    }
}

export default connect(
    state => ({
        auth_toggled: state
    }),
    dispatch => ({
        onButtonClick:(state) =>{
            dispatch({type: "AUTH_BTN",payload: state})
        }
    })
)(reduxTest)