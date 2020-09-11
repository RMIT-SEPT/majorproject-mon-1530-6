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
      currentUser: { firstname: "" },
      board: "",
      booking: []
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    //this.setState({ booking: BookingService.findBooking(currentUser.id) });

    // this.state.booking = BookingService.findBooking(currentUser.id);

    /* BookingService.findBooking(currentUser.id).then((res) => {
       this.setState({ booking: res.data })
     }
     )
 */



    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true })




    if (currentUser) {
      this.setState({

        board: currentUser.roles.includes("ROLE_USER")
      });
    }


  }


  book = () => {
    this.props.history.push("/booking");
    window.location.reload();
  }

  render() {


    const { board } = this.state;


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



              { /*this.state.booking.map((link) =>

                <h1 key={link.id}>{link.id}</h1>
              ) */}

            </header>
          </div> : null}







        {board && (
















          < button type="button" class="btn btn-outline-secondary btn-lg btn-block my-4" onClick={this.book}>Book an Appointment </button>
        )
        }

      </div>
    );
  }
}
