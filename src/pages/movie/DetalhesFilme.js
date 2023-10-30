import React from "react";

function DetalhesFilme({ filme }) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{filme.title}</h5>
          <p className="card-text">{filme.overview}</p>
          <p>Data de Lançamento: {filme.release_date}</p>
          <p>Nota: {filme.vote_average}</p>
        </div>
      </div>
      <div className="mt-4">
        <iframe
          title="Trailer do Filme"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${filme.trailer_key}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default DetalhesFilme;
