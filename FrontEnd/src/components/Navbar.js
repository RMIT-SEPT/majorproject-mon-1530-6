import React, { Component } from 'react'
import AuthService from "./services/AuthService";

//navbar
export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            showEmployeeBoard: false,
            showAdminBoard: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        //get the current user type
        if (user) {
            this.setState({
                currentUser: user,
                showEmployeeBoard: user.roles.includes("ROLE_EMPLOYEE"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {

        const { currentUser, showAdminBoard } = this.state;

        return (

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#9e9e9e " }}>

                {/* if current user, show the following links and navigations (COMMON TO ALL)*/}
                {currentUser ? (
                    <a className="navbar-brand" href="/profile"><strong>SEPT</strong></a>
                ) : (<a className="navbar-brand" href="/"><strong>SEPT</strong></a>)}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">

                        {/* if Admin, show the following links and navigations*/}
                        {showAdminBoard && (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item" >
                                    <a href={"/booking"} className="nav-link">
                                        Booking
                                          </a>
                                </li>
                                <li className="nav-item" >
                                    <a href={"/addemployee"} className="nav-link">
                                        Employee
                                          </a>
                                </li>
                                <li className="nav-item" >
                                    <a href={"/roster"} className="nav-link">
                                        Roster
                                      </a>
                                </li>
                            </div>
                        )}



                        {/* if current user, show the following links and navigations (COMMON TO ALL)*/}
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a href={"/profile"} className="nav-link">
                                        <strong> {currentUser.username}</strong>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={this.logOut}>
                                        LogOut
                                          </a>
                                </li>
                            </div>
                        ) : (

                                <li class="nav-item">
                                    <a class="nav-link" href={"/"}><strong>Home</strong></a>
                                </li>

                            )}

                    </ul>
                </div>
            </nav>
        )
    }
}
