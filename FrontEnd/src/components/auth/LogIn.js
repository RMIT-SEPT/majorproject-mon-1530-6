import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";

class LogIn extends Component {
    state = {
        username: "",
        password: "",
        errors: {
            cognito: null,
            blankfield: false
        }
    };
    clearErrorState = () => {
        this.setState({
            errors: {

                blankfield: false
            }
        });
    };

    handleSubmit = async event => {
        event.preventDefault();

        // Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
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



                        <div class="input-group mb-3">

                            <input
                                className="form-control"
                                type="text"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="Enter username or email"
                                value={this.state.username}
                                onChange={this.onInputChange}
                            />
                        </div>




                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text"> <i className="fas fa-lock"></i></span>
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
                </div>
            </section>
        );
    }
}

export default LogIn;