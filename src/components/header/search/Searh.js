import React, {useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

export const Search = ({classes}) => {

    const [search, setSearch] = useState()

    const handleSearchText = (event) => {
        setSearch(event.target.value)
    }

    console.log(search)

    return(
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleSearchText}
            />
        </div>
    )
}