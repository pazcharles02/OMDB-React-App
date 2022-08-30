import React from "react";
import "./MovieInfo.css"

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function MovieInfo(props) {
    const results = props.results
    const setResults = props.setResults;
    const searchTerm = props.searchTerm;

    let searchResults;

    const handleEvent = () => {
        const url = "https://www.omdbapi.com/?apikey=" + OMDB_API_KEY + "&s="
        console.log("searching... " + searchTerm)
        let xhttp = new XMLHttpRequest();
        xhttp.open("GET", url + searchTerm, true);
        xhttp.send();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(JSON.parse(this.responseText))
                searchResults = JSON.parse(this.responseText);
                setResults(() => {
                    return (
                        searchResults["Search"].map(({Title, Year, imdbID, type, Poster}) => {
                            console.log(searchResults["Search"]);
                            console.log(imdbID);
                            return (
                                <article key={imdbID} className={"search_result"}>
                                    <div className={"movie_poster_image"}>
                                        <img src={Poster} alt={Title}/>
                                    </div>
                                    <h3>{Title}</h3>
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
        <section id="MovieInfo">
            <h1>{results}</h1>
            <p onClick={handleEvent} id={"trigger_search"}/>
        </section>
    )
}

export default MovieInfo;