import React, { Component } from 'react'


import AuthService from "./services/AuthService";



export default class Navbar extends Component {


    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showEmployeeBoard: false,
            showAdminBoard: false,
            currentUser: undefined
            //    showUserBoard: false
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showEmployeeBoard: user.roles.includes("ROLE_EMPLOYEE"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")

                //   showUserBoard: user.roles.includes("ROLE_USER")
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {

        const { currentUser, showAdminBoard, showEmployeeBoard } = this.state;

        return (
            /*
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <a href={"/"} className="navbar-brand">
                                SID
                                    </a>
                            <div className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a href={"/home"} className="nav-a">
                                        Home
                                        </a>
                                </li>
            
                                {showUserBoard && (
                                    <li className="nav-item">
                                        <a href={"/emp"} className="nav-a">
                                            Employee Board
                                          </a>
                                    </li>
                                )}
            
                                {showAdminBoard && (
                                    <li className="nav-item">
                                        <a href={"/admin"} className="nav-a">
                                            Admin Board
                                          </a>
                                    </li>
                                )}
            
                                {currentUser && (
                                    <li className="nav-item">
                                        <a href={"/user"} className="nav-a">
                                            User
                                          </a>
                                    </li>
                                )}
                            </div>
            
                            {currentUser ? (
                                <div className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <a href={"/profile"} className="nav-a">
                                            {currentUser.username}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/login" className="nav-a" onClick={this.logOut}>
                                            LogOut
                                          </a>
                                    </li>
                                </div>
                            ) : (
                                    <div className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <a href={"/login"} className="nav-a">
                                                Login
                                          </a>
                                        </li>
            
                                        <li className="nav-item">
                                            <a href={"/register"} className="nav-a">
                                                Sign Up
                                          </a>
                                        </li>
                                    </div>
                                )}
                        </nav>
            
            
            
            */




            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#9e9e9e " }}>


                {currentUser ? (
                    <a className="navbar-brand" href="/profile"><strong>SEPT</strong></a>

                ) : (<a className="navbar-brand" href="/"><strong>SEPT</strong></a>)}


                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                { /* showUserBoard && (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item" >
                            <a href={"/booking"} className="nav-link">
                               Book an Appointment
                                          </a>
                        </li>
                   </div>
            ) */}



                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">





                        {showAdminBoard && (
                            <div className="navbar-nav ml-auto">
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



                        {showEmployeeBoard && (

                            <div className="navbar-nav ml-auto">
                                <li className="nav-item" >
                                    <a href={"/emp"} className="nav-link">
                                        Employee Board
                                        </a>
                                </li>
                            </div>



                        )}






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










            /*
                        <nav className="navbar" style={{ backgroundColor: "#9e9e9e " }} role="navigation" aria-label="main navigation">
                            <div id="navbarBasicExample" className="navbar-menu">
                                <div className="navbar-end">
                                    <div className="navbar-item">
            
                                        <div className="buttons">
                                            <a href="/" className="btn is-light my-0">
                                                <strong>HOME</strong>
                                            </a>
                                        </div>
            
            
            
            
                                    </div>
                                </div>
            
                            </div>
                        </nav>*/


        )
    }
}
