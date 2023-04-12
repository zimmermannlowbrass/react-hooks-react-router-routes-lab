import React from "react";
import { directors } from "../data";

function Directors() {


  const directorList = directors.map(director => {
    
    const movieListOfDirector = director.movies.map(movie => {
      return (
        <li key = {director.movies.indexOf(movie)}>{movie}</li>
      )
    })

    return (
      <div key = {directors.indexOf(director)}>
        {director.name}
        <br />
        {movieListOfDirector}
      </div>
    )
  })

  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>)
}

export default Directors;
