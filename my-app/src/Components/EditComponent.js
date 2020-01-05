import React, { Component } from 'react'
import { connect } from 'react-redux';

class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newselectedCompany = this.getcompany.value
        const newLocation = this.getlocation.value;
        const newtitle = this.getjobTitle.value;
        const newOpenings = this.getopenings.value;
        const newSalary = this.getsalary.value;

        const data = {
            id: new Date(),
            newselectedCompany,
            newLocation,
            newtitle,
            newOpenings,
            newSalary,
            editing:false
        }
        this.props.dispatch({
            type: 'UPDATE_DATA',
            id:this.props.post.id,
            data:data

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
                            <input type="text" class="form-control" placeholder="No of Openings" ref={(input) => this.getopenings = input} />
                        </div>
                        <div class="form-group">
                            <label>Salary</label>
                            <input type="text" class="form-control" placeholder="Salary" ref={(input) => this.getsalary = input} />
                        </div>
                        <button class="btn btn-primary" value="Submit">update</button>
                    </form>
                </div>
                <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Company</th>
                        <th scope="col">Location</th>
                        <th scope="col">JobTitle</th>
                        <th scope="col">No of Openings</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                </table>


            </div>
        )
    }
}
export default connect()(EditComponent)
