import React from 'react';
function MovieCard(props) {
  return (
    <div className="movie-card">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.description}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
}

export default MovieCard;
