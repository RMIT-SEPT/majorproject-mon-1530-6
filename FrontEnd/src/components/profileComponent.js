import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./services/AuthService";
import BookingService from "./services/BookingService";

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
      bookingList: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    //set the path to '/' if no user found
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })


    BookingService.findBooking({ username: currentUser.username }).then(
      (result) => {
        this.setState({
          bookingList: result.data
        });
      })





    //set user type for each user in this page
    if (currentUser) {
      this.setState({
        userboard: currentUser.roles.includes("ROLE_USER")
      });
    }
    if (currentUser) {
      this.setState({
        adminboard: currentUser.roles.includes("ROLE_ADMIN")
      });
    }
    if (currentUser) {
      this.setState({
        empboard: currentUser.roles.includes("ROLE_EMPLOYEE")
      });
    }
  }

  //availabe only for customer, proceed to booking 
  book = () => {
    this.props.history.push("/booking");
    window.location.reload();
  }

  render() {
    const { userboard } = this.state;

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
                {currentUser.id
                }
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

        {userboard && (
          <div>

            <div class="card mb-4">
              <div class="card-body">
                <h2>Booking's</h2>
                <hr></hr>
                {this.state.bookingList.map((item) =>
                  <h4><small>You have a booking with </small>{item.name}<small> for </small>{item.service}<small> on </small>{item.day}<small> at </small>{item.time}<small> (status: </small>{item.status}<small>)</small></h4>
                )}
              </div>
            </div>

            < button type="button" class="btn btn-outline-secondary btn-lg btn-block my-4" onClick={this.book}>Book an Appointment </button>
          </div>

        )
        }
      </div >
    );
  }
}
