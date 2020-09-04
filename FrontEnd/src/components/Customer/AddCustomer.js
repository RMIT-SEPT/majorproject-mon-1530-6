import React, { Component } from 'react'

class AddCustomer extends Component {
    constructor(){
        super();

        this.state= {
        username: "",
        name: "",
        password: "",
        address: "",
        phoneNum: ""
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newCustomer = {
            username: this.state.username,
            name: this.state.name,
            password: this.state.password,
            address:this.state.address,
            phoneNum: this.state.phoneNum  
        }

        console.log(newCustomer);
    }
    render() {
        return (
            <div className="Customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create / Edit Customer form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Customer Username" 
                                name="username"
                                value= {this.state.username}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Name"
                                name="name"
                                value= {this.state.name}
                                onChange = {this.onChange}
                                    />
                            </div>
                          
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Customer password"
                                name = "password"
                                value= {this.state.password}
                                onChange = {this.onChange}
                                />
                                

                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Customer address"
                                name = "address"
                                value= {this.state.address}
                                onChange = {this.onChange}
                                />
                                

                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Phone Number"
                                name = "phoneNum"
                                value= {this.state.phoneNum}
                                onChange = {this.onChange}
                                />
                                

                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default AddCustomer;