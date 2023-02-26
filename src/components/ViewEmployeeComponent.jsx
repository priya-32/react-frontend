import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Bike Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> BikeName </label>
                            <div> { this.state.employee.bikeName }</div>
                        </div>
                        <div className = "row">
                            <label> Model </label>
                            <div> { this.state.employee.model }</div>
                        </div>
                        <div className = "row">
                            <label> Founder </label>
                            <div> { this.state.employee.founder }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
