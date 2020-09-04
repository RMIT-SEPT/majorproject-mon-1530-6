import React, { Component } from 'react'
import Customer from './Customers/Customer'
import CreatePersonButton from './Customers/CreateCustomerButton';

class Dashboard extends Component {
    render() {
        return (
            <div className="Customers">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Customers</h1>
                        <br />
                       <CreateCustomerButton />
                        <br />
                        <hr />
                        <Customer/>
                    </div>
                </div>
            </div>
        </div>
    
        )
    }
}
export default Dashboard;
