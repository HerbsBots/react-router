// src/MovieDescription.js
import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "./movies";

function MovieDescription() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <h2>Movie not found.</h2>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;
