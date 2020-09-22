import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "./services/AuthService";
import BookingService from "./services/BookingService";

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
    //this.setState({ bookingList: BookingService.findBooking("qwerty") });
    // this.state.booking = BookingService.findBooking(currentUser.id);

    let username = currentUser.username;
    /*
    BookingService.findBooking(username).then((res) => {
      this.setState({ bookingList: res.data })
    }
    )
  */

    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })

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

  book = () => {
    this.props.history.push("/booking");
    window.location.reload();
  }

  render() {
    const { userboard, adminboard, empboard } = this.state;

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

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
              {
                this.state.bookingList.map(
                  link =>
                    <tr>{link.id}</tr>
                )
              }
              {/*
                this.state.bookingList.map(person => (
                  <p key={person.id}>{person.name}</p>
                ))
                */}
            </header>
          </div> : null}
        { /*this.renderChild(bookingList)
        */}

        {userboard && (
          < button type="button" class="btn btn-outline-secondary btn-lg btn-block my-4" onClick={this.book}>Book an Appointment </button>
        )
        }
        {/*
          adminboard && (
            <h1>DISPLAY LIST OF EMPLOYEES</h1>
          )
          */}
        {/*
          empboard && (
            <h1>DISPLAY EMPLOYEE WORK ASSIGNED</h1>
          )
          */}
      </div >
    );
  }
}
