import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const [trailerLink, setTrailerLink] = useState(""); // Estado para armazenar o link do trailer
    const KEY = process.env.REACT_APP_KEY;

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
            });

        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=pt-BR`)
            .then((response) => response.json())
            .then((data) => {
                const trailer = data.results.find((video) => video.type === 'Trailer');
                if (trailer) {
                    const trailerLink = `https://www.youtube.com/watch?v=${trailer.key}`;
                    setTrailerLink(trailerLink);
                }
            });
    }, [KEY, id]);

    return (
        <div>
          
            <div className="container mt-4">
                <div className="card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt={movie.title}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title">{movie.title}</h1>
                                <p className="card-text">{movie.overview}</p>
                                <p className="card-text">
                                    Data de lançamento: {movie.release_date}
                                </p>
                                <div className="d-flex mt-5 gap-5 justify-content-center align-items-center">
                                     {trailerLink && (
                                    <a href={trailerLink} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-primary">
                                            Trailer
                                        </button>
                                    </a>
                                )}
                                <Link to="/">
                                    <button className="btn btn-secondary">
                                        Voltar
                                    </button>
                                </Link>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
