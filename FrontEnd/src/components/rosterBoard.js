import React, { Component } from "react";
import AuthService from "./services/AuthService";
import { Redirect } from "react-router-dom";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

//Only admin access, rostering an employee
export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      days: [],
      time: [],
      service: [],

      redirect: null,

      content: "",
      service_list: ["Hair Dying", "Nail Polish", "Body Massage"],
      name_list: ["Alex", "James", "Kurt", "Jane", "Katie"],
      day_list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      time_list: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"]
    };
  }

  //get current user
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })
    //Get Employee List from Backend
  }

  addDays = event => {
    this.setState(
      { days: [...this.state.days, event.target.value] }
    )
    console.log(this.state.days);
  }

  addTime = event => {
    this.setState(
      { time: [...this.state.time, event.target.value] }
    )
    console.log(this.state.time);
  }

  addService = event => {

    this.setState(
      { service: [...this.state.service, event.target.value] }
    )
    console.log(this.state.service);
  }
  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false
      }
    });
  };

  onInputChange = event => {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);

  }

  //save the roster made by admin
  saveRoster = (event) => {
    event.preventDefault();
    this.clearErrorState();
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    return (

      <div className="container mb-4">
        <h1 className="display-3">ROSTER EMPLOYEE</h1>

        <form >
          <div className="form-group row">
            <label className="col-sm-2  h5">Employee</label>
            <div className="col-sm-10" onChange={this.onInputChange}>
              <select className="custom-select mr-sm-2" id="service_prodider" >
                <option selected disabled>Choose...</option>
                {this.state.name_list.map((item) =>
                  <option key={item}>{item}</option>
                )}
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2  h5">Select Day</label>
            <div className="col-sm-10">
              <form onChange={this.addDays} >
                <DropdownMultiselect
                  options={this.state.day_list}
                />
              </form>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2  h5">Select Time</label>
            <div className="col-sm-10">
              <form onChange={this.addTime} >
                <DropdownMultiselect
                  options={this.state.time_list}
                />
              </form>
            </div>
          </div>


          <div className="form-group row">
            <label className="col-sm-2  h5">Select Service</label>
            <div className="col-sm-10">
              <form onChange={this.addService} >
                <DropdownMultiselect
                  options={this.state.service_list}
                />
              </form>
            </div>
          </div>

          <div className="form-group row mt-4">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-outline-secondary" onClick={this.saveRoster}>Confirm Roster</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}
