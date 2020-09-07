import React, { Component } from 'react'
import CustomerService from './services/CustomerService'

export default class ListCustomerComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            customer: []

        }
        this.addCustomer = this.addCustomer.bind(this);

    }



    componentDidMount() {
        CustomerService.getCustomer().then((res) => {
            this.setState({ customer: res.data });
        })
    }

    addCustomer() {
        this.props.history.push('/register');

    }



    render() {
        return (
            <div>

                <h2 className="text-center">CustomerList</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addCustomer}>Add Customer</button>
                </div>




                <div className="row">

                    <table className="table table-striped table-bordered">

                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>PhoneNumber</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.customer.map(
                                    customer =>
                                        <tr key={customer.id}>
                                            <td>{customer.firstname}</td>
                                            <td>{customer.lastname}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.email}</td>



                                        </tr>
                                )
                            }






                        </tbody>




                    </table>







                </div>









            </div>
        )
    }
}
