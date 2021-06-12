import React from "react";
import API from "../../utils/API";
import Search from "../Search";
import "./style.css";

import DateFormat from "dateformat";


class Table extends React.Component {
    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    componentDidMount() {
        API.ApiSearch()
        .then(response => {
            this.setState({
                results: response.data.results
            });
        });
    }

    handleInputChange = e => {
        if (e.target.name === "search") {
            const searchTerm = e.target.value.toLowerCase();
            this.setState({
                search: searchTerm
            })
        } 
    }
// sort first name alphabetically
    sortByFirstName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.first > a.name.first) {
                return -1
            }
            if (a.name.first > b.name.first) {
                return 1
            }
            return 0;
        });
        if (this.state.sortOrder === "descending") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ascending "});
        } else {
            this.setState({ sortOrder: "descending "});
        }
        this.setState({ results: sortedEmployees })
    }
// sort last name alphabetically
    sortByLasttName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.last > a.name.last) {
                return -1
            }
            if (a.name.last > b.name.last) {
                return 1
            }
            return 0;
        });
        if (this.state.sortOrder === "descending") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ascending "});
        } else {
            this.setState({ sortOrder: "descending "});
        }
        this.setState({ results: sortedEmployees })
    }
    render () {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                search={this.state.search} />
                <div className="table-responsive">
                    <table className="table table-striped table-resposive text-center table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Fist Name <span className="downArrow" onClick={this.sortByFirstName}></span></th>
                                <th>Last Name <span className="downArrow" onClick={this.sortByLasttName}></span></th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                    {
                        this.state.results && this.state.results.map(item =>
                        item.name.first.toLowerCase().includes(this.state.search) ? 
                        <tbody>
                            <tr>
                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td>{item.name.first}</td>
                                <td>{item.name.last}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{DateFormat(item.dob.date, "longDate")}</td>
                            </tr>
                        </tbody>
                        :
                        item.name.last.toLowerCase().includes(this.state.search) ?
                        <tbody>
                            <tr>
                                <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                                <td>{item.name.first}</td>
                                <td>{item.name.last}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{DateFormat(item.dob.date, "longDate")}</td>
                            </tr>
                        </tbody>
                        :
                        null
                    )}
                    </table>

                </div>
            </div>
        )
    }
}
export default Table;