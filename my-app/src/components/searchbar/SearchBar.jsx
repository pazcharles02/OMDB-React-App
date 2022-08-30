import React from "react";
import "./SearchBar.css"
import {useState} from "react"

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState(props.searchTerm);

    const handleSearchTermChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <section id={"searchbar"}>
            <textarea onChange={handleSearchTermChange} value={searchTerm}/>
        </section>
    )
}

export default SearchBar;