import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation";

export class RegisterCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: "",
            lastname: "",
            address: "",
            phone: "",
            email: "",
            password: "",
            confirmpassword: ""


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
        this.clearErrorState();
        const error = Validate(e, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            let customer = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                address: this.state.address,
                phone: this.state.phone,
                email: this.state.email,
                password: this.state.password,
                confirmpassword: this.state.confirmpassword
            };
            CustomerService.createCustomer(customer).then(res => {
                this.props.history.push('/');
            });
        }

    }


    render() {

        const { id } = this.props.location
        return (
            <section className="auth">
                <div className="container">
                    <h1>Register {id}</h1>
                    <FormErrors formerrors={this.state.errors} />







                    <div class="input-group mb-3">
                        <input
                            className="form-control"
                            type="name"
                            id="firstname"
                            aria-describedby="nameHelp"
                            placeholder="Enter FirstName"
                            value={this.state.firstname}
                            onChange={this.onInputChange}
                        />
                    </div>


                    <div class="input-group mb-3">
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


                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i className="fas fa-envelope"></i></span>
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







                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i className="fas fa-home"></i></span>
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


                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i className="fas fa-phone"></i></span>
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


                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i className="fas fa-lock"></i></span>
                        </div>
                        <input
                            className="form-control"
                            type="password"
                            id="confirmpassword"
                            placeholder="Confirm password"
                            value={this.state.confirmpassword}
                            onChange={this.onInputChange}
                        />
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

                </div>
            </section>
        );
    }
}

export default RegisterCustomerComponent
