import React from "react";
import {TextField, InputAdornment} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search'

const Search = ({searchTerm, onChange}) => {


    return (
        <div className="search">
            <TextField
                className=""
                label='Search for repositories..'
                type='search'
                variant='outlined'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                              <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                value={searchTerm}
                onChange={(e) => onChange(e.target.value)}

            />
        </div>

    )
}

export default Search
