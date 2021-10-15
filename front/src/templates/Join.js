import React, { Component } from "react";

export default class Join extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" />
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./Login">sign in?</a>
                </p>
            </form>
        );
    }
}
//https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/