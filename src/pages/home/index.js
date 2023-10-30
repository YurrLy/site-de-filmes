import React, { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import SearchBar from "./pesquisa";
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <h1>Movies</h1>
            <SearchBar onSearch={handleSearch} />
            <MovieList>
                {moviesRender.map((movie) => (
                    <Movie key={movie.id}>
                        <img
                            src={`${imagePath}${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <span>{movie.title}</span>
                        <Link to={`/${movie.id}`}>
                            <Btn>Detalhes</Btn>
                        </Link>
                    </Movie>
                ))}
            </MovieList>
        </Container>
    );
}

export default Home;
