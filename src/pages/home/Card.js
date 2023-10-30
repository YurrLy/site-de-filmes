import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard({ movie, imagePath }) {
  const posterUrl = `${imagePath}${movie.poster_path}`;

  return (
    <div className=" mb-4">
      <Card style={{ width: "12rem" }}>
        <Card.Img variant="top" src={posterUrl} style={{ height: "12rem" }} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Button variant="primary" href={`/${movie.id}`}>
            Detalhes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
