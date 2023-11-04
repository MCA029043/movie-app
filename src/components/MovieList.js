import React from 'react';
import data from '../movieData.json';

import MovieCard from './MovieCard';

function MovieList() {
  return (
    <div className="movie-list">
      {data.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          subtitle={movie.subtitle}
          description={movie.description}
          image={movie.image}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
