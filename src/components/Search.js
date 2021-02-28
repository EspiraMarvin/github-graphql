import React from "react";

const Search = ({searchTerm, onChange}) => {


    return (
        <div className="search center-align">
            <div className="row">
                        <div className="input-field col s12">
                            <input
                                type="email"
                                className="validate s12"
                                value={searchTerm}
                                onChange={(e) => {onChange(e.target.value)}}
                            />
                            <label htmlFor="email">Search for repositories... <i className="material-icons search-icon">search</i></label>
                        </div>
            </div>
        </div>
)
}

export default Search
