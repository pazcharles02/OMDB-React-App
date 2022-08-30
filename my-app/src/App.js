import React, {useState} from "react";
import SearchBar from "./components/searchbar/SearchBar";
import MovieInfo from "./components/movieinfo/MovieInfo";
import APIKey from "./components/apikey/APIKey";


function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState("");
    const [apiKey, setApiKey] = useState("");

    return (
        <React.Fragment>
            <APIKey apiKey={apiKey} setApiKey={setApiKey} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <MovieInfo apiKey={apiKey} searchTerm={searchTerm} results={results} setResults={setResults} />
        </React.Fragment>
    )
}

export default App;
