import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from "./components/App";
import ReduxTest from "./components/ReduxTest"
import {compose, createStore} from "redux";
import {AuthBtnReducer} from "./components/reducers";
import LoginFormTest from "./components/Auth/LoginFormTest"
import {BrowserRouter as Router, Route} from "react-router-dom";
import {syncHistoryWithStore} from "react-router-redux"
import registerForm from "./components/Auth/RegisterForm";

import reducer from "./components/reducers"


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    console.log('sub', store.getState())
})


console.log('subgovno')

render(<Router>
        <Route path="/login" component={LoginFormTest}/>
        <Route path="/register" component={registerForm}/>
    </Router>,
    document.getElementById('root'))