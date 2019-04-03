import React, { Component } from 'react';
import fakeAuth from './fakeAuth';
import withRouter from 'react-Router-dom';
class AuthButton extends Component {
    render({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);



const AuthButton = withRouter;
export default AuthButton;
