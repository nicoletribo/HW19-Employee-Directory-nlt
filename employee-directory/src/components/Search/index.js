import React from "react";
import "./style.css";

const Search = (props) => {
    return (
        <form>
            <div className="form-group"> 
                <div className="input-group mb-3">
                    <input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search employee directory for an employee"
                    id="search"
                    />
                </div>
            </div>
        </form>
    );
}

export default Search;
