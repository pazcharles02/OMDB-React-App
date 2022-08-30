import React, {useState} from "react";
import SearchBar from "./components/searchbar/SearchBar";
import MovieInfo from "./components/movieinfo/MovieInfo";


function App() {
    const [searchTerm] = useState("lol");

    return (
        <React.Fragment>
            <SearchBar searchTerm={searchTerm} />
            <MovieInfo searchTerm={searchTerm} />
        </React.Fragment>
    )
}

export default App;
