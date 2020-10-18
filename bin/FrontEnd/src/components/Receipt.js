import React, { Component } from 'react'
import AuthService from './services/AuthService'

import { Redirect } from "react-router-dom";

export default class Customer extends Component {

    state = {
        redirect: null,
        userReady: false,
        check: false,
        currentUser: { username: "" },

    };
    confirm = () => {
        this.props.history.push("/profile");
        window.location.reload();
    }

    booking = () => {
        this.props.history.push("/booking");
        window.location.reload();
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/" });
        this.setState({ currentUser: currentUser, userReady: true })
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        const { service_prodider } = this.props.location
        const { appointment_day } = this.props.location
        const { appointment_time } = this.props.location

        return (


            <section className="section">
                <div className="container">
                    {(this.state.userReady && service_prodider != null) ?
                        <div className="card mx-5 my-5">

                            <i className="d-inline-block mx-auto my-4 card-img-top fas fa-calendar-check fa-10x"></i>

                            <div class="card-body d-inline-block mx-auto">
                                <div className="card-text">
                                    <h3><small>Your booking is confirmed with </small>{service_prodider} <small>on </small>{appointment_day} <small>at </small>{appointment_time}.</h3>
                                </div>
                            </div>

                            <button type="button" class="btn btn-outline-success mx-5 my-5" onClick={this.confirm}>Confirmed </button>
                        </div> :



                        <div className="card mx-5 my-5">

                            <i className="d-inline-block mx-auto my-4 card-img-top fas fa-calendar-times fa-10x"></i>

                            <button type="button" class="btn btn-outline-danger mx-5 my-5" onClick={this.booking}>Make a Booking </button>
                        </div>











                    }
                </div >
            </section >
        )
    }
}