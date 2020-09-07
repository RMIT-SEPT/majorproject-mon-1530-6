import React, { Component } from 'react'

export default class Customer extends Component {

    render() {
        const { service_prodider } = this.props.location
        const { appointment_day } = this.props.location
        const { appointment_time } = this.props.location

        return (
            <section className="section">
                <div className="container">
                    <div className="card">
                        <i className="d-inline-block mx-auto my-4 card-img-top fas fa-calendar-check fa-10x"></i>
                        <div class="card-body d-inline-block mx-auto">
                            <div className="card-text">
                                <h3><small>Your booking is confirmed with </small>{service_prodider} <small>on </small>{appointment_day} <small>at </small>{appointment_time}.</h3>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        )
    }
}