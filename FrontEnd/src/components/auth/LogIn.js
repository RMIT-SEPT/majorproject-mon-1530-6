import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import AuthService from "../services/AuthService";

//login for an user/Employee and Admin
class LogIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false
            }
        });
    };

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            message: "",
            loading: true
        });

        // Form validation
        this.clearErrorState();
        const error = Validate(e, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            //pass the values into the controller and awair the result
            AuthService.login(this.state.username, this.state.password).then(
                //if success, navigate to profile page
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                //else show error on the page
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        }
    };

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");
    };

    render() {
        return (
            <section className="auth">
                <div className="container">
                    <h1>Log In</h1>
                    <FormErrors formerrors={this.state.errors} />

                    <form onSubmit={this.handleSubmit}>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i class="fa fa-user-circle" aria-hidden="true"></i></span>
                            </div>

                            <input
                                className="form-control"
                                type="text"
                                id="username"

                                placeholder="Enter username"
                                value={this.state.username}
                                onChange={this.onInputChange}
                            />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-lock"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onInputChange}
                            />
                        </div>

                        <div className="field">
                            <p className="control">
                                <a href="/register">New user?</a>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="btn btn-outline-secondary">Login</button>
                            </p>
                        </div>
                    </form>

                    {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default LogIn;