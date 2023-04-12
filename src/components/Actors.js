import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map(actor => {

    const movies = actor.movies.map(movie => {
      return (
        <li key = {actor.movies.indexOf(movie)}>
          {movie}
        </li>
      )
    })
    return (
      <div key={actors.indexOf(actor)}>
        {actor.name}
        {movies}
      </div>
    )
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  )
}

export default Actors;
