import React, { Component } from 'react'
import { connect } from 'react-redux';

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const selectedCompany = this.getcompany.value
        const Location = this.getlocation.value;
        const title = this.getjobTitle.value;
        const Openings = this.getopenings.value;
        const Salary = this.getsalary.value;

        const data = {
            id: new Date(),
            selectedCompany,
            Location,
            title,
            Openings,
            Salary,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_DATA',
            data

        });

    }
    render() {
        return (
            <div >
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label >Company</label>
                            <select class="form-control" ref={(input) => this.getcompany = input}>
                                <option value="Facebook">Facebook</option>
                                <option value="Amazon">Amazon</option>
                                <option value="Flipkart">Flipkart</option>
                                <option value="Masai">Masai</option>
                                <option value="Accenture">Accenture</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label >Location</label>
                            <input type="text" class="form-control" placeholder="Location" ref={(input) => this.getlocation = input} />
                        </div>
                        <div class="form-group">
                            <label >Job Title</label>
                            <input type="text" class="form-control" placeholder="Job Title" ref={(input) => this.getjobTitle = input} />
                        </div>
                        <div class="form-group">
                            <label>No of Openings</label>
                            <input type="number" class="form-control" placeholder="No of Openings" ref={(input) => this.getopenings = input} />
                        </div>
                        <div class="form-group">
                            <label>Salary</label>
                            <input type="number" class="form-control" placeholder="Salary" ref={(input) => this.getsalary = input} />
                        </div>
                        <button class="btn btn-primary" value="Submit">submit</button>
                    </form>
                </div>

                {/* <tbody className="container">
                    <tr >
                        <th class="col-2">Company</th>
                        <th class="col-2">Location</th>
                        <th class="col-2">JobTitle</th>
                        <th class="col-2">No of Openings</th>
                        <th class="col-2">Salary</th>
                        <th class="col-2">Edit</th>
                        <th class="col-2">Delete</th>

                    </tr>

                </tbody> */}




            </div>
        )
    }
}
export default connect()(Form)

{/* <th class="col">Company</th>
                        <th class="col">Location</th>
                        <th class="col">JobTitle</th>
                        <th class="col">No of Openings</th>
                        <th class="col">Salary</th>
                        <th class="col">Edit</th>
                        <th class="col">Delete</th>
 */}
