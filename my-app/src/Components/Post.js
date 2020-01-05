import React, { Component } from 'react'
import { connect } from "react-redux"

class Post extends Component {

    render() {
        console.log(this.props)
        return (

            <table class="table ">
                
                <tbody>
                    <tr >
                        <th >{this.props.post.selectedCompany}</th>
                        <td>{this.props.post.Location}</td>
                        <td>{this.props.post.title}</td>
                        <td>{this.props.post.Openings}</td>
                        <td>{this.props.post.Salary}</td>
                        <td><button onClick={() => this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })}>Edit</button></td>
                        <td><button onClick={() => this.props.dispatch({ type: "DELETE_DATA", id: this.props.post.id })}>Delete</button></td>
                    </tr>

                </tbody>
            </table>

        )
    }
}
export default connect()(Post);
{/* <th >{this.props.post.selectedCompany}</th>
                            <td>{this.props.post.Location}</td>
                            <td>{this.props.post.title}</td>
                            <td>{this.props.post.Openings}</td>
                            <td>{this.props.post.Salary}</td>
                            <td><button onClick={() => this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })}>Edit</button></td>
                            <td><button onClick={() => this.props.dispatch({ type: "DELETE_DATA", id: this.props.post.id })}>Delete</button></td> */}