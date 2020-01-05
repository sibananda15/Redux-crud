import React, { Component } from 'react'
import { connect } from 'react-redux'
import Post from './Post';
import EditComponent from './EditComponent'


class Alldata extends Component {
    constructor() {
        super()
        this.state = {
            data1: [],
            page: 1,
            per_page: 10
        }
    }


    handleNext = (a) => {
        if (a <= this.state.data1.length) {
            this.setState({
                page: a + 1
            })
        }
    }
    handlePrev = (a) => {
        if (a > 1) {
            this.setState({
                page: a - 1
            })
        }
    }
    Asc = () => {
        let asc = this.state.data1.sort((a, b) => (a.Salary - b.Salary))
        this.setState({
            data1: asc
        })
    }
    Desc = () => {
        let desc = this.state.data1.sort((a, b) => (b.Salary - a.Salary))
        this.setState({
            data1: desc
        })
    }
    // amazon=(e)=>{

    //    var arr=this.props.posts
    //     var x =arr.filter((num)=>{
    //         return num.selectedCompany===e.target.value
    //     });
    // }
    pagination = (data, page, per_page) => {
        let start = (page - 1) * Number(per_page);
        let end = start + Number(per_page);
        let slicedData = data.slice(start, end);
        let total_pages = Math.ceil(data.length / per_page)
        return {
            'data': slicedData,
            'per_page': per_page,
            'total_pages': total_pages,
        }

    }
    handlePagination = (page1) => {
        this.setState({
            page: page1

        })

    }
    render() {

        this.state.data1 = this.props.posts
        var totalInfo = this.pagination(this.state.data1, this.state.page, this.state.per_page)
        var total_pages = totalInfo.total_pages;
        var showData = totalInfo.data
        var pageNumbers = []
        for (var i = 1; i <= total_pages; i++) {
            pageNumbers.push(i)
        }
        var button = pageNumbers.map(btn => {
            return (
                <button className="btn btn-danger" onClick={() => this.handlePagination(btn)}>{btn}</button>
            )
        })
        var nextButton = () => {
            if (this.state.page !== this.state.data1.length) {
                return (
                    <button className="btn btn-primary" onClick={() => this.handleNext(this.state.page)}> Next</button>
                )

            }
            else {
                return (
                    <button className="btn btn-primary" disabled>Next</button>
                )
            }
        }
        var prevButton = () => {
            if (this.state.page !== 1) {
                return (
                    <button className="btn btn-success" onClick={() => this.handlePrev(this.state.page)}>Prev</button>
                )
            }
            else {
                return (
                    <button className="btn btn-success" disabled>Prev</button>
                )
            }
        }

        return (
            <div>
                {/* <select class="form-control" onClick={this.amazon}>
                    <option value="Facebook">Facebook</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Flipkart">Flipkart</option>
                    <option value="Masai">Masai</option>
                    <option value="Accenture">Accenture</option>
                </select> */}
                <table class="table mt-2">
                    <thead>
                        <tr>
                            <th class="col">Company</th>
                            <th class="col">Location</th>
                            <th class="col">JobTitle</th>
                            <th class="col">No of Openings</th>
                            <th class="col">Salary</th>
                            <th class="col">Edit</th>
                            <th class="col">Delete</th>
                        </tr>
                    </thead>
                </table>
                <table className="table">

                    <tbody>

                        {showData.map((post) => (<tr key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id} /> : <Post post={post} key={post.id} />}

                        </tr>))}

                    </tbody>
                </table>
                <div>{prevButton()}{button} {nextButton()}</div>
                <button className="btn btn-success" onClick={this.Asc}>Asc Salary</button>
                <button className="btn btn-success" onClick={this.Desc}>Desc Salary</button>
                <br></br>

            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(Alldata)
