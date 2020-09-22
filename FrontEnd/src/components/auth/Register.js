import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";
import AuthService from "../services/AuthService";

export class RegisterCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            phone: "",
            email: "",
            username: "",
            password: "",
            successful: false,
            message: ""


        }
        this.saveUser = this.saveUser.bind(this);
        this.onInputChange = this.onInputChange.bind(this);

    }

    onInputChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById(event.target.id).classList.remove("is-danger");

    }

    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false
            }
        });
    };

    saveUser = (e) => {
        e.preventDefault();


        this.setState({
            message: "",
            successful: false
        });


        this.clearErrorState();
        const error = Validate(e, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            AuthService.register(
                this.state.firstname,
                this.state.lastname,
                this.state.address,
                this.state.email,
                this.state.phone,
                this.state.password,
                this.state.username

            ).then(
                () => {
                    AuthService.login(this.state.username, this.state.password).then(
                        () => {
                            this.props.history.push("/profile");
                            window.location.reload();
                        })

                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );

        }

    }


    render() {


        return (
            <section className="auth">
                <div className="container">
                    <h1>Register</h1>
                    <div className="text-danger">

                        <FormErrors formerrors={this.state.errors} />
                    </div>


                    <form>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i class="fa fa-user-circle" aria-hidden="true"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="name"
                                id="username"
                                placeholder="Enter UserName"
                                value={this.state.username}
                                onChange={this.onInputChange}
                            />
                        </div>




                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-user"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="name"
                                id="firstname"
                                placeholder="Enter FirstName"
                                value={this.state.firstname}
                                onChange={this.onInputChange}
                            />
                        </div>


                        <div class="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-user"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="name"
                                id="lastname"
                                aria-describedby="userNameHelp"
                                placeholder="Enter LastName"
                                value={this.state.lastname}
                                onChange={this.onInputChange}
                            />
                        </div>


                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-envelope"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="email"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email"
                                value={this.state.email}
                                onChange={this.onInputChange}
                            />
                        </div>







                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-home"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="address"
                                id="address"
                                aria-describedby="addressHelp"
                                placeholder="Enter Address"
                                value={this.state.address}
                                onChange={this.onInputChange}
                            />
                        </div>


                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fas fa-phone"></i></span>
                            </div>
                            <input
                                className="form-control"
                                type="phone"
                                id="phone"
                                aria-describedby="phoneHelp"
                                placeholder="Enter Phone"
                                value={this.state.phone}
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
                            <small id="passwordHelpBlock" class="form-text text-muted">
                                Your password must be 8-20 characters long, contain letters, special character and numbers, and must not contain spaces. </small>

                        </div>


                        <div className="field">
                            <p className="control">
                                <a href="/login">Already a user?</a>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="btn btn-outline-secondary" onClick={this.saveUser}>
                                    Register
                    </button>
                            </p>
                        </div>

                        {this.state.message && (
                            <div className="form-group mt-2">
                                <div
                                    className={"mt-2",
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}

                    </form>

                </div>
            </section >
        );
    }
}

export default RegisterCustomerComponent
