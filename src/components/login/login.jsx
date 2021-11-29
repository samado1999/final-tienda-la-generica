import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card card-body">
              <h3 className="text-center mb-4">Login</h3>
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button className="login-button">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
