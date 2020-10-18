import React, { Component } from "react";
import FormErrors from './FormErrors';
import Validate from './utility/FormValidation';
import AuthService from "./services/AuthService";
import { Redirect } from "react-router-dom";

//adding an employee by admin
export default class addEmployeeBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      email: "",
      username: "",
      password: "",
      content: "",
      errors_message_password: "",
      errors_message_email: "",
      fields: {},
      errors_message_phone: ""

    };
  }

  onInputChange = event => {

    this.setState({
      fields: event.target.value
    });

    if (event.target.id === "email") {
      if (this.state.fields !== "") {
        let lastAtPos = this.state.fields.lastIndexOf('@');
        let lastDotPos = this.state.fields.lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.fields.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.fields.length - lastDotPos) > 2)) {
          this.setState({
            errors_message_email: "Email is not valid"
          });
        }
        else {
          this.setState({
            errors_message_email: ""
          });
        }
      }
    }
    if (event.target.id === "password") {
      var pattern = new RegExp(/^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$)/i);
      if (!pattern.test(this.state.fields)) {
        this.setState({
          errors_message_password: "Password not valid."
        });

      }
      else {
        this.setState({
          errors_message_password: ""
        });
      }
    }
    if (event.target.id === "phone") {
      var phone_pattern = new RegExp(/(\(+61\)|\+61|\(0[1-9]\)|0[1-9])?( ?-?[0-9]){6,9}/i);
      if (!phone_pattern.test(this.state.fields)) {
        this.setState({
          errors_message_phone: "Phone not valid."
        });

      }
      else {
        this.setState({
          errors_message_phone: ""
        });
      }
    }


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


  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  addEmployee = (e) => {
    e.preventDefault();
    this.setState({
      message: "",
      successful: false
    });

    this.clearErrorState();
    const error = Validate(e, this.state);
    if (error || this.state.errors_message_email !== "" || this.state.errors_message_password !== "" || this.state.errors_message_phone !== "") {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    else {
      //pass the values to register in the database
      AuthService.addEmployee(
        this.state.firstname,
        this.state.lastname,
        this.state.address,
        this.state.email,
        this.state.phone,
        this.state.password,
        this.state.username

      ).then(
        () => {
          //if success push to profile page
          this.props.history.push("/profile");
          window.location.reload();
        },

        //display error if failed
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
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (

      <div className="container">
        <h1 class="display-3">ADD EMPLOYEE</h1>
        <div className="text-danger">
          <FormErrors formerrors={this.state.errors} />
        </div>

        <form className="mb-4">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label>FirstName</label>
              <input
                className="form-control"
                type="name"
                id="firstname"
                placeholder="Enter FirstName"
                value={this.state.firstname}
                onChange={this.onInputChange}
              />
            </div>

            <div class="form-group col-md-6">
              <label>LastName</label>
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
          </div>

          <div class="form-group">
            <label>Address</label>
            <input
              className="form-control"
              type="address"
              id="address"
              aria-describedby="addressHelp"
              placeholder="Unit 125"
              value={this.state.address}
              onChange={this.onInputChange}
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                id="email"
                aria-describedby="emailHelp"
                placeholder="admin@gmail.com"
                value={this.state.email}
                onChange={this.onInputChange}
              />
              <small id="passwordHelpBlock" class="form-text text-danger">
                {this.state.errors_message_email} </small>
            </div>

            <div class="form-group col-md-6">
              <label>Phone Number</label>
              <input
                className="form-control"
                type="phone"
                id="phone"
                aria-describedby="phoneHelp"
                placeholder="+61"
                value={this.state.phone}
                onChange={this.onInputChange}
              />
              <small class="form-text text-danger">
                {this.state.errors_message_phone} </small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <label>UserName</label>
              <input
                className="form-control"
                type="name"
                id="username"
                placeholder="Enter UserName"
                value={this.state.username}
                onChange={this.onInputChange}
              />
            </div>

            <div class="form-group col-md-6">
              <label>Password</label>
              <input
                className="form-control"
                type="text"
                id="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onInputChange}
              />
              <small id="passwordHelpBlock" class="form-text text-muted">
                Password must contain at least one UpperCase, one LowerCase, one Digit, one Special character and minimum 8 character length.</small>
              <small id="passwordHelpBlock" class="form-text text-danger">
                {this.state.errors_message_password} </small>
            </div>
          </div>

          <button type="submit" class="btn btn-outline-secondary" onClick={this.addEmployee} >Add</button>

          {this.state.message && (
            <div className="form-group">
              <div
                className={
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
    );
  }
}
