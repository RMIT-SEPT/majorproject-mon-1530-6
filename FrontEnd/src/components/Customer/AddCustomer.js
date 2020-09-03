import React, { Component } from 'react'

class AddCustomer extends Component {
    constructor(){
        super();

        this.state= {
        name: "",
        id: "",
        password: "",
        created_At: "",
        updated_At: ""
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
            name: this.state.name,
            id: this.state.id,
            password: this.state.password,
            created_At:this.state.created_At,
            updated_At: this.state.updated_At  
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
                                placeholder="Customer Name" 
                                name="name"
                                value= {this.state.name}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Unique ID"
                                name="id"
                                value= {this.state.id}
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
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="created_At"
                                value= {this.state.created_At}
                                onChange = {this.onChange}
                                />
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input type="date" className="form-control form-control-lg" 
                                name="end_date" 
                                value= {this.state.updated_At}
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