import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import Api from "./components/Api";
import ReduxTest from "./components/ReduxTest"
import {createStore} from "redux";
import {AuthBtnReducer} from "./components/reducers";
import LoginFormTest from "./components/Auth/LoginFormTest"
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import registerForm from "./components/Auth/RegisterForm";

import reducer from "./components/reducers"

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let shit = "/register"

render(<Provider store={store}>
        <Router>
            <Route path="/api/main" component={Api}/>
            <Route path="/login" component={LoginFormTest}/>
            <Route path="/register" component={registerForm}/>

        </Router>
    </Provider>,
    document.getElementById('root'))