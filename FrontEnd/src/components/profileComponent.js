import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./services/AuthService";
import BookingService from "./services/BookingService";
import CustomerService from "./services/CustomerService";
import EmployeeService from "./services/EmployeeService";
import FormErrors from "./FormErrors";
import Validate from "./utility/FormValidation";

//like a dashboard, profile of each user displayed
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      userboard: "",
      adminboard: "",
      empboard: "",
      update: "",
      bookingList: [],
      customerList: [],
      employeeList: [],
      workList: [],
      allWork: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    //set the path to '/' if no user found
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })

    //set user type for each user in this page
    if (currentUser.roles.includes("ROLE_USER")) {
      this.setState({
        userboard: currentUser.roles.includes("ROLE_USER")
      });
      BookingService.findBooking({ username: currentUser.username }).then(
        (result) => {
          this.setState({
            bookingList: result.data
          });
        })
    }

    else if (currentUser.roles.includes("ROLE_ADMIN")) {
      this.setState({
        adminboard: currentUser.roles.includes("ROLE_ADMIN")
      });
      BookingService.getBooking().then(
        (result) => {
          this.setState({
            bookingList: result.data
          });
        })
      CustomerService.getCustomer().then(
        (result) => {
          this.setState({
            customerList: result.data
          });

        }
      )
      EmployeeService.getEmployee().then(
        (result) => {
          this.setState({
            employeeList: result.data
          });

        }
      )
    }

    else if (currentUser.roles.includes("ROLE_EMPLOYEE")) {
      this.setState({
        empboard: currentUser.roles.includes("ROLE_EMPLOYEE")
      });

      EmployeeService.getWork({ username: currentUser.username }).then(
        (result) => {
          this.setState({
            workList: result.data
          });
        }
      )
      EmployeeService.getAllWork({ username: currentUser.username }).then(
        (result) => {
          this.setState({
            allWork: result.data
          });
        }
      )
    }
  }

  //availabe only for customer, proceed to booking 
  book = () => {
    this.props.history.push("/booking");
    window.location.reload();
  }
  clearErrorState = () => {
    this.setState({
      errors: {
        blankfield: false
      }
    });
  };


  updateBooking = event => {
    this.setState({
      update: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }


  checkStatus(status) {
    if (status === "unconfirmed") {
      return <h4><small className="text-danger">unconfirmed</small></h4>
    }
    else if (status === "pending") {
      return <h4><small className="text-warning">pending</small></h4>
    }
    else if (status === "unapproved") {
      return <h4><small className="text-danger">unapproved</small></h4>
    }
    else if (status === "confirmed") {
      return <h4><small className="text-success">confirmed</small></h4>
    }
  }

  approveBooking = (e) => {
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

      BookingService.approveBooking({ id: this.state.update }).then(
        window.location.reload()
      )
    }
  }

  rejectBooking = (e) => {
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

      BookingService.rejectBooking({ id: this.state.update }).then(
        window.location.reload()
      )
    }
  }

  deleteBooking = (e) => {
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

      BookingService.deleteBooking({ id: this.state.update }).then(
        window.location.reload()
      )
    }
  }

  render() {
    const { userboard, adminboard, empboard } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state
    var profileName = "Customer";
    // eslint-disable-next-line 
    if (currentUser.roles == "ROLE_ADMIN")
      profileName = "ADMIN";
    // eslint-disable-next-line 
    else if (currentUser.roles == "ROLE_EMPLOYEE")
      profileName = "EMPLOYEE";
    // eslint-disable-next-line 
    else if (currentUser.roles == "ROLE_USER")
      profileName = "CUSTOMER";

    return (
      <div className="container">


        {(this.state.userReady) ?
          <div>
            <header className="jumbotron mt-3 pt-4 pb-2">
              <h3>
                <strong>{profileName}</strong> Profile
          </h3>
              <br></br>
              <p >
                <strong>Id:</strong>{" "}
                {currentUser.id}
              </p>
              <p>
                <strong>Name:</strong>{" "}
                {currentUser.username}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {currentUser.email}
              </p>
            </header>
          </div> : null}


        {adminboard && (
          <div>
            <div class="card mb-4">
              <div class="card-body">
                {this.state.bookingList.length ? (
                  <div>
                    <h2>All Booking's</h2>
                    <hr></hr>
                    <table class="table mx-2">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Service</th>
                          <th scope="col">Day</th>
                          <th scope="col">Time</th>
                          <th scope="col">User Name</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      {this.state.bookingList.map((item) =>
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.name}</td>
                          <td>{item.service}</td>
                          <td>{item.day}</td>
                          <td>{item.time}</td>
                          <td>{item.username}</td>
                          <td>{this.checkStatus(item.status)}</td>
                        </tr>
                      )}
                      <tbody>
                      </tbody>
                    </table>
                    <div className="card py-3">

                      <div className="container mb-3 ">
                        <label className="h6">Select ID</label>

                        <form value={this.state.update} onChange={this.updateBooking} >
                          <div className="text-danger">
                            <FormErrors formerrors={this.state.errors} />
                          </div>
                          <select class="form-control" id="update" >
                            <option selected="true" disabled="disabled">--SELECT--</option>
                            {this.state.bookingList.map((item) =>
                              <option key={item}>{item.id}</option>
                            )}
                          </select>
                        </form>
                      </div>
                      <div className="col-4  ">
                        <button type="button" class="btn btn-outline-secondary mr-2" onClick={this.approveBooking}>Approve</button>
                        <button type="button" class="btn btn-outline-secondary mr-2" onClick={this.rejectBooking}>Reject</button>
                        <button type="button" class="btn btn-outline-secondary" onClick={this.deleteBooking}>Delete</button>
                      </div>
                    </div>
                  </div>
                )
                  :
                  <div>
                    <h2>No Booking's </h2>
                  </div>
                }
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                {this.state.customerList.length ? (
                  <div>
                    <h2>Customer List</h2>
                    <hr></hr>
                    <table class="table mx-2">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Address</th>
                          <th scope="col">Phone Number</th>
                        </tr>
                      </thead>
                      {this.state.customerList.map((item) =>
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.phone}</td>
                        </tr>
                      )}
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                ) : <div>
                    <h2>No Customer's </h2>
                  </div>}
              </div>
            </div>

            <div class="card mb-4">
              <div class="card-body">
                {this.state.employeeList.length ? (
                  <div>
                    <h2>Employee List</h2>
                    <hr></hr>
                    <table class="table mx-2">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">First Name</th>
                          <th scope="col">Last Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Address</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">User Name</th>
                        </tr>
                      </thead>
                      {this.state.employeeList.map((item) =>
                        <tr>
                          <th scope="row">{item.id}</th>
                          <td>{item.firstname}</td>
                          <td>{item.lastname}</td>
                          <td>{item.email}</td>
                          <td>{item.address}</td>
                          <td>{item.phone}</td>
                          <td>{item.username}</td>

                        </tr>
                      )}
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                ) : <div>
                    <h2>No Employee's </h2>
                  </div>}
              </div>
            </div>
          </div>
        )
        }

        {userboard && (
          <div>
            <div class="card mb-4">
              <div class="card-body">
                {this.state.bookingList.length ? (
                  <div>
                    <h2>Booking's</h2>
                    <hr></hr>
                    {this.state.bookingList.map((item) =>
                      <div>
                        <h4 className="d-none d-lg-block d-print-block"><small>You have a booking with </small>{item.name}<small> for </small>{item.service}<small> on </small>{item.day}<small> at </small>{item.time} {this.checkStatus(item.status)}</h4>
                      </div>
                    )}
                  </div>
                ) : <div>
                    <h2>No Booking's </h2>
                  </div>}
              </div>
            </div>
            < button type="button" class="btn btn-outline-secondary btn-lg btn-block my-4" onClick={this.book}>Book an Appointment </button>
          </div>
        )
        }


        {empboard && (
          <div>
            <div class="card mb-4">
              <div class="card-body">
                {this.state.workList.length ? (
                  <div>
                    <h2>Confirmed List</h2>
                    <hr></hr>
                    <table class="table mx-2">
                      <thead>
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Time</th>
                          <th scope="col">Service</th>
                          <th scope="col">Customer Name</th>
                        </tr>
                      </thead>
                      {this.state.workList.map((item) =>
                        <tr>
                          <td>{item.day}</td>
                          <td>{item.time}</td>
                          <td>{item.service}</td>
                          <td>{item.username}</td>
                        </tr>
                      )}
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                ) : <div>
                    <h2>No Confirmed Bookings yet </h2>
                  </div>}
              </div>
            </div>



            <div class="card mb-4">
              <div class="card-body">
                {this.state.allWork.length ? (
                  <div>
                    <h2>Your work List</h2>
                    <hr></hr>
                    <table class="table mx-2">
                      <thead>
                        <tr>
                          <th scope="col">Day</th>
                          <th scope="col">Time</th>
                          <th scope="col">Service</th>
                        </tr>
                      </thead>
                      {this.state.allWork.map((item) =>
                        <tr>
                          <td>{item.day}</td>
                          <td>{item.time}</td>
                          <td>{item.service}</td>
                        </tr>
                      )}
                      <tbody>
                      </tbody>
                    </table>
                  </div>
                ) : <div>
                    <h2>You are not rostered  </h2>
                    <small id="passwordHelpBlock" class="form-text text-muted">
                      Contact Admin </small>
                  </div>}
              </div>
            </div>


          </div>

        )
        }


      </div >
    );
  }
}
