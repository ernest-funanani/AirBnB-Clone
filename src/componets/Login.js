import React from "react";
import "./Login.css";

const Login = () => {
  const submitLogin = () => {};
  return (
    <div className="login-form">
      <h2>Log in or Sign up</h2>
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect with facebook</button>
        <button className="google-login">Connect with google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input type="text" className="browser-default" placeholder="Email" />
        <input
          type="password"
          className="browser-default"
          placeholder="Password"
        />
        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>Dont have account? Sign Up</div>
      </form>
    </div>
  );
};

export default Login;
