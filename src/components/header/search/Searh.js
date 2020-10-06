import React, {useEffect, useState} from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {DropDown} from "./dropDown/DropDown";

export const Search = ({classes}) => {

    const [search, setSearch] = useState({text: '', open: false})

    const handleSearchText = (event) => {
        setSearch({text: event.target.value, open: true})
    }

    useEffect(() => {
        if(search.text === "" && search.open){
            setSearch({...search, open: false})
        }
    }, [search])

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
            <DropDown search={search} setSearch={setSearch}/>
        </div>
    )
}