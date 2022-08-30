import React, from "react";
import "./MovieInfo.css"

function MovieInfo(props) {
    const results = props.results;

    return (
        <section id="MovieInfo">
            <h1 className={"Title"}>{results}</h1>
        </section>
    )
}

export default MovieInfo;