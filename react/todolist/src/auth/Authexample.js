import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import AuthButton from './authButton'

function AuthExanple(){
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/public'>P</Link>
                    </li>
                    <li>
                        <Link to='/protected'>Pr</Link>
                    </li>
                </ul>
                <Router path='/public' component={Public}></Router>
                <Router path='login' component={Login}></Router>
                <Router path='protected' component={prctected}></Router>
            </div>
        </Router>
    )
}
export default AuthExanple;