import React, { Component } from 'react'
import Validate from './utility/FormValidation'
import FormErrors from './FormErrors'
import BookingService from './services/BookingService'
import AuthService from "./services/AuthService"
import { Redirect } from "react-router-dom";
import EmployeeService from "./services/EmployeeService"

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
        EmployeeService.getServiceName().then(
            (result) => {
                this.setState({
                    service_list: result.data
                });
            })

    }

    saveName = event => {
        this.setState({
            service_prodider: event.target.value
        });
        console.log(event.target.value);
    }

    saveService = event => {

        this.setState(
            { service: event.target.value }
        );
        document.getElementById("availability-day").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        let employee = {
            service: [event.target.value]
        };
        EmployeeService.getServiceDays(employee).then(
            (result) => {
                this.setState({
                    day_list: result.data
                });
            })

    }


    saveDay = event => {
        this.setState({
            appointment_day: event.target.value
        });
        document.getElementById("availability-time").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        let employee = {
            service: [this.state.service],
            day: [event.target.value]
        };
        EmployeeService.getServiceTime(employee).then(
            (result) => {
                this.setState({
                    time_list: result.data
                });
            })

    }

    saveTime = event => {
        this.setState({
            appointment_time: event.target.value
        });
        document.getElementById("service_provider").style.display = 'block';
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
        let employee = {
            service: [this.state.service],
            day: [this.state.appointment_day],
            time: [event.target.value]
        };
        EmployeeService.getServiceProvider(employee).then(
            (result) => {
                this.setState({
                    name_list: result.data
                });
            })
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


                            <div className="field service" id="service">
                                <p className="control">
                                    <form value={this.state.service} onChange={this.saveService} >
                                        <div className="container form-group" >
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
                                    <div className="h2">{this.state.service} is Avaibale on </div>
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








                            <div className="field service-provider" id="service_provider">
                                <p className="control">
                                    <form value={this.state.appointment_time} onChange={this.saveName} >
                                        <div className="container form-group">
                                            <label className="h6">Select Service Provider</label>
                                            <select class="form-control" id="service_prodider" >
                                                <option selected="true" disabled="disabled">--SELECT--</option>
                                                {this.state.name_list.map((item) =>
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