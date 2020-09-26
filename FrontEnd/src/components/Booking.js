import React, { Component } from 'react'
import Validate from './utility/FormValidation'
import FormErrors from './FormErrors'
import BookingService from './services/BookingService'
import AuthService from "./services/AuthService"
import { Redirect } from "react-router-dom";

//make a booking ny user
export default class Booking extends Component {

    state = {
        service_prodider: "-Select-",
        service: "",
        appointment_day: "",
        appointment_time: "",
        redirect: null,
        userReady: false,
        check: false,
        currentUser: { username: "" },
        errors: {
            blankfield: false
        },
        service_list: [],
        name_list: [],
        day_list: [],
        time_list: []
    };

    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false
            }
        });
    };


    //save the booking details in the database 
    saveBooking = (event) => {
        event.preventDefault();
        this.clearErrorState();

        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
        else {
            let booking = {
                service: this.state.service,
                name: this.state.service_prodider,
                day: this.state.appointment_day,
                time: this.state.appointment_time,
                username: this.state.currentUser.username,
                status: "unconfirmed"
            };


            BookingService.addBooking(booking).then(
                () => {
                    //show receipt if booking success
                    this.props.history.push({
                        pathname: '/receipt',
                        service_prodider: this.state.service_prodider,
                        appointment_day: this.state.appointment_day,
                        appointment_time: this.state.appointment_time
                    })
                },
                error => {
                    //display error is booking not successfull
                    this.props.history.push({
                        pathname: '/error',
                        service_prodider: this.state.service_prodider,
                        appointment_day: this.state.appointment_day,
                        appointment_time: this.state.appointment_time
                    })

                }
            );


        }
    };

    //to the the update of current user
    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (!currentUser) this.setState({ redirect: "/" });
        //set redirect path is no user found
        this.setState({ currentUser: currentUser, userReady: true })
        this.state.name_list = ["Alex", "James", "Kurt", "Jane", "Katie"]
    }

    saveName = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById("service").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        this.state.service_list = ["Hair Dying", "Nail Polish", "Body Massage"]
    }

    saveDay = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById("availability-time").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        this.state.time_list = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"]

    }

    saveTime = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
    }

    saveService = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
        document.getElementById("availability-day").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        this.state.day_list = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    }




    render() {

        //if no user found, redirect to home page
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <section className="section">

                {(this.state.userReady) ?
                    <div className="container">
                        <h1 class="display-3">BOOKING</h1>
                        <div className="text-danger">
                            <FormErrors formerrors={this.state.errors} />
                        </div>

                        <form>
                            <div className="form-group row">
                                <label className="h6 col-sm-2 col-form-label">Service Provider</label>
                                <div className="col-sm-10" value={this.state.service_prodider} onChange={this.saveName}>
                                    <select class="form-control" id="service_prodider" >
                                        <option selected="true" disabled="disabled">--SELECT--</option>
                                        {this.state.name_list.map((item) =>
                                            <option key={item}>{item}</option>
                                        )}
                                    </select>
                                </div>
                            </div>


                            <div className="field service" id="service">
                                <p className="control">
                                    <div className="h2">{this.state.service_prodider}'s Availability</div>
                                    <form value={this.state.service} onChange={this.saveService} >
                                        <div className="container form-group">
                                            <label className="h6">Select Service</label>
                                            <select class="form-control" id="service" >
                                                <option selected="true" disabled="disabled">--SELECT--</option>
                                                {this.state.service_list.map((item) =>
                                                    <option key={item}>{item}</option>
                                                )}
                                            </select>
                                        </div>
                                    </form>
                                </p>
                            </div>


                            <div className="field avail-day" id="availability-day">
                                <p className="control">

                                    <form value={this.state.appointment_day} onChange={this.saveDay} >
                                        <div className="container form-group">
                                            <label className="h6">Select Day</label>
                                            <select class="form-control" id="appointment_day" >
                                                <option selected="true" disabled="disabled">--SELECT--</option>
                                                {this.state.day_list.map((item) =>
                                                    <option key={item}>{item}</option>
                                                )}
                                            </select>
                                        </div>
                                    </form>
                                </p>
                            </div>

                            <div className="field avail-time" id="availability-time">
                                <p className="control">
                                    <form value={this.state.appointment_time} onChange={this.saveTime} >
                                        <div className="container form-group">
                                            <label className="h6">Select Time</label>
                                            <select class="form-control" id="appointment_time" >
                                                <option selected="true" disabled="disabled">--SELECT--</option>
                                                {this.state.time_list.map((item) =>
                                                    <option key={item}>{item}</option>
                                                )}
                                            </select>
                                        </div>
                                    </form>
                                </p>
                            </div>



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

                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button type="submit" className="btn btn-outline-secondary" onClick={this.saveBooking}>Confirm</button>
                                </div>
                            </div>

                        </form>

                    </div > :
                    <div className="container">
                        <header className="jumbotron mt-3">
                            <h3>Please Register/Login</h3>
                        </header>
                    </div>}
            </section >
        )
    }
}