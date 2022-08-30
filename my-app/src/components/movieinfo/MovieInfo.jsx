import React from "react";
import "./MovieInfo.css"

// const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function MovieInfo(props) {
    const results = props.results
    const setResults = props.setResults;
    const searchTerm = props.searchTerm;
    const OMDB_API_KEY = props.apiKey;

    let searchResults;

    const handleEvent = () => {
        const url = "https://www.omdbapi.com/?apikey=" + OMDB_API_KEY + "&s="
        console.log("searching... " + searchTerm)
        setResults("searching...")
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + searchTerm, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                searchResults = JSON.parse(this.responseText);
                setResults(() => {
                    return (
                        searchResults["Search"].map(({Title, Year, imdbID, Poster}) => {
                            return (
                                <article key={imdbID} className={"search_result"}>
                                    <div className={"movie_poster_image"}>
                                        <img src={Poster} alt={"Poster Unavailable"}/>
                                    </div>
                                    <h1>{Title}</h1>
                                    <p>Year of release: {Year}</p>
                                    <button>Label</button>
                                </article>
                            )
                        })
                    )
                })
            }
            else {
                searchResults = "N/A";
                setResults("N/A");
            }
        }
    }

    return (
        <div className={"container"} id={"MovieInfo"}>
            {results}
            <p onClick={handleEvent} id={"trigger_search"}/>
        </div>
    )
}

export default MovieInfo;