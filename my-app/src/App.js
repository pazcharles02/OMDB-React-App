import React, {useState} from "react";
import SearchBar from "./components/searchbar/SearchBar";
import MovieInfo from "./components/movieinfo/MovieInfo";


function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState("");

    return (
        <React.Fragment>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <MovieInfo searchTerm={searchTerm} results={results} setResults={setResults} />
        </React.Fragment>
    )
}

export default App;
