import React, {useEffect} from "react";
import "./SearchBar.css"

const OMDB_API_KEY = process.env.OMDB_API_KEY;

function SearchBar(props) {
    const searchTerm = props.searchTerm;
    const setSearchTerm = props.setSearchTerm;
    const setResults = props.setResults;

    function search(query) {
        const url = "https://www.omdbapi.com/?apikey=" + OMDB_API_KEY + "&s="
        console.log("searching... " + query)
        let xhttp = new XMLHttpRequest();
        let results;
        xhttp.open("GET", url + query, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                results = JSON.parse(this.responseText);
            }
            else {
                results = "N/A"
            }
            setResults(results);
        }
    }

    useEffect(() => {
        const timeOutId = setTimeout(() => search(searchTerm), 5000);
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