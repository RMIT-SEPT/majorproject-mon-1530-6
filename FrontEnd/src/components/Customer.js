import React, { Component } from 'react'
import Validate from './utility/FormValidation'
import FormErrors from './FormErrors'

export default class Customer extends Component {

    state = {
        service_prodider: "",
        appointment_day: "",
        appointment_time: "",
        errors: {
            blankfield: false
        },
        name_list: ["Alex", "James", "Kurt", "Jane", "Katie"],
        day_list: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        time_list: ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"]
    };

    clearErrorState = () => {
        this.setState({
            errors: {
                blankfield: false
            }
        });
    };

    handleSubmit = async event => {
        event.preventDefault();
        // Form validation
        this.clearErrorState();
        const error = Validate(event, this.state);
        if (error) {
            this.setState({
                errors: { ...this.state.errors, ...error }
            });
        }
    };

    onInputChange = event => {
        document.getElementById("availability-day").style.display = 'block';
        this.setState({
            [event.target.id]: event.target.value
        });
        if (this.state.service_prodider !== "") {
            document.getElementById("availability-time").style.display = 'block';
        }
        console.log(event.target.value);
        document.getElementById(event.target.id).classList.remove("is-danger");
    };

    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 class="display-3">BOOKING</h1>
                    <FormErrors formerrors={this.state.errors} />
                    <form onSubmit={this.handleSubmit}>
                        <form>
                            <div className="form-group row">
                                <label className="h6 col-sm-2 col-form-label">Service Provider</label>
                                <div className="col-sm-10" value={this.state.service_prodider} onChange={this.onInputChange}>
                                    <select class="form-control" id="service_prodider" >
                                        <option selected="true" disabled="disabled">--SELECT--</option>
                                        {this.state.name_list.map((item) =>
                                            <option key={item}>{item}</option>
                                        )}
                                    </select>
                                </div>
                            </div>

                            <div className="field avail-day" id="availability-day">
                                <p className="control">
                                    <div className="h2">{this.state.service_prodider}'s Availability</div>
                                    <form value={this.state.appointment_day} onChange={this.onInputChange} >
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
                                    <form value={this.state.appointment_time} onChange={this.onInputChange} >
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

                            <div class="form-group row">
                                <div class="col-sm-10">
                                    <button type="submit" className="button btn-secondary">Confirm</button>
                                </div>
                            </div>
                        </form>
                    </form >
                </div >
            </section >
        )
    }
}

