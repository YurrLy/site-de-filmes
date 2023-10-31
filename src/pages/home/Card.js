import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function MovieCard({ movie, imagePath }) {
  const posterUrl = `${imagePath}${movie.poster_path}`;

  return (
    <div className="mb-4">
      <Card className="d-flex flex-column justify-content-between text-center" style={{ width: "12rem", height: "100%", backgroundColor: "black" }}>
        <Card.Img variant="top" src={posterUrl} style={{ height: "12rem" }} />
        <Card.Body className="d-flex flex-column justify-content-between" style={{ height: "100%" }}>
          <div style={{ maxHeight: "7rem", overflow: "hidden" }}>
            <Card.Title style={{ color: "#fff" }}>{movie.title}</Card.Title>
          </div>
          <Button variant="primary" href={`/${movie.id}`}>
            Detalhes
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
