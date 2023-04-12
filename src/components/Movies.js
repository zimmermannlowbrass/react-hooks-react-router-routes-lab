import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map(movie => {

    const genres = movie.genres.map(genre => {
      return (
        <li key={movie.genres.indexOf(genre)}>{genre}</li>
      )
    })

    return (
      <div key={movies.indexOf(movie)}>
        Movie Title : {movie.title}
        <br />
        Movie Time : {movie.time}
        <br />
        <ul>{genres}</ul>
        <br />
        <br />
        <br />
      </div>
    )
  })


  return (
  <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>
  )
}

export default Movies;
