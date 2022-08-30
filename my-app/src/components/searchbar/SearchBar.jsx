import React, {useEffect} from "react";
import "./SearchBar.css"

function SearchBar(props) {
    const searchTerm = props.searchTerm;
    const setSearchTerm = props.setSearchTerm;

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            document.getElementById("trigger_search").click();
        }, 3000);
        console.log(searchTerm);
        return () => clearTimeout(timeOutId);
    }, [searchTerm])

    return (
        <section id={"searchbar"}>
            <textarea onChange={event => setSearchTerm(event.target.value)} value={searchTerm}/>
        </section>
    )
}

export default SearchBar;