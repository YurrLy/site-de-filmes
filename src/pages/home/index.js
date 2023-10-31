import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import SearchBar from "./pesquisa";
import MovieCard from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../img/Logo.jpeg";


function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    }, [KEY]);

    const handleSearch = (query) => {
        setQuery(query);

        const filteredMovies = movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filteredMovies);
    };

    const moviesRender = searchResults.length > 0 ? searchResults : movies;
    
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center gap-5 mb-5">
                <img src={logo} alt="Logo" width="100" height="100" />
               <h1>Filmes em alta</h1> 
            </div>
            
            <SearchBar onSearch={handleSearch}/>
            <MovieList className="row m-5">
                {moviesRender.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} imagePath={imagePath} />
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;
