import { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const API_URL = 'https://www.omdbapi.com/?apikey=86bce559'

const App = () => {

    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies('')
    }, []);
    return ( <
        div className = "app" >
        <
        h1 > MovieWorld < /h1> <
        div className = "search" >
        <
        input placeholder = "Search for movies"
        value = { searchTerm }
        onChange = {
            (e) => setSearchTerm(e.target.value)
        }
        /> <
        img src = { SearchIcon }
        alt = 'search'
        onClick = {
            () => searchMovies(searchTerm)
        }
        /> < /
        div > {
            movies ? .length > 0 ?
            ( <
                div className = "container" > {
                    movies.map((movie) => ( <
                        MovieCard movie = { movie }
                        />
                    ))
                } <
                /div>
            ) : ( <
                div className = "empty" >
                <
                h2 > No Movies Fround < /h2> < /
                div >
            )
        } <
        /div> 
    );
}

export default App;