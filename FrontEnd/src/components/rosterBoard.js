import React, { Component } from "react";
import AuthService from "./services/AuthService";
import { Redirect } from "react-router-dom";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import EmployeeService from './services/EmployeeService';
import Validate from './utility/FormValidation';
import FormErrors from './FormErrors';

//Only admin access, rostering an employee
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service_provider: "",
      day: "",
      time: [],
      service: "",
      redirect: null,
      content: "",
      service_list: ["Hair Dying", "Nail Polish", "Body Massage"],
      name_list: [],
      day_list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time_list: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"]
    };
  }

  //get current user
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
    //Get Employee List from Backend
    EmployeeService.getEmployeeName().then(
      (result) => {
        this.setState({
          name_list: result.data
        });
      })
  }

  //assign the state variables with day
  addDay = event => {
    this.setState({
      day: event.target.value
    });
    console.log(this.state.days);
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  //assign the state variables with time
  addTime = event => {
    this.setState(
      { time: [...this.state.time, event.target.value] }
    )
    console.log(this.state.time);
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  //assign the state variables with service
  addService = event => {
    this.setState({
      service: event.target.value
    });
    console.log(this.state.service);
    document.getElementById(event.target.id).classList.remove("is-danger");
  }
  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false
      }
    });
  };
  //assign the state variables with service_provider
  addservice_provider = event => {
    this.setState({
      service_provider: event.target.value
    });
    console.log(this.state.service_provider);
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  cancelRoster = () => {
    this.props.history.push("/profile");
    window.location.reload();
  }

  //save the roster made by admin
  saveRoster = (event) => {
    event.preventDefault();
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }
    else {
      let empRoster = {
        name: this.state.service_provider,
        service: [this.state.service],
        day: [this.state.day],
        time: this.state.time,
        status: "available"
      };
      EmployeeService.addEmployee(empRoster).then(
        () => {
          //if success push to profile page
          this.props.history.push("/roster");
          window.location.reload();
        }
      );
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="container mb-4">
        <h1 className="display-3">ROSTER EMPLOYEE</h1>
        <div className="text-danger">
          <FormErrors formerrors={this.state.errors} />
        </div>
        <form >
          <div className="form-group row">
            <label className="col-sm-2  h5">Employee</label>
            <div className="col-sm-10" onChange={this.addservice_provider}>
              <select className="custom-select mr-sm-2" id="service_provider" >
                <option selected disabled>Choose...</option>
                {this.state.name_list.map((item) =>
                  <option key={item}>{item}</option>
                )}
              </select>
            </div>
          </div>
          <div className="form-group row" id="availability-day">
            <label className="col-sm-2  h5">Select Day</label>
            <div className="col-sm-10" onChange={this.addDay}>
              <select className="custom-select mr-sm-2" id="availability-day" >
                <option selected disabled>Choose...</option>
                {this.state.day_list.map((item) =>
                  <option key={item}>{item}</option>
                )}
              </select>
            </div>
          </div>
          <div className="form-group row" id="availability-time">
            <label className="col-sm-2  h5">Select Time</label>
            <div className="col-sm-10">
              <form onChange={this.addTime} >
                <DropdownMultiselect
                  options={this.state.time_list}
                />
              </form>
            </div>
          </div>
          <div className="form-group row" id="service">
            <label className="col-sm-2  h5">Select Service</label>
            <div className="col-sm-10" onChange={this.addService}>
              <select className="custom-select mr-sm-2" id="service" >
                <option selected disabled>Choose...</option>
                {this.state.service_list.map((item) =>
                  <option key={item}>{item}</option>
                )}
              </select>
            </div>
          </div>
          <div class="col-4 form-group row mt-4 ">
            <button type="submit " className="btn btn-outline-secondary mr-2" onClick={this.saveRoster}>Confirm Roster</button>
            <button type="submit " className="btn btn-outline-danger" onClick={this.cancelRoster}>Back</button>
          </div>
        </form>
      </div>
    );
  }
}
