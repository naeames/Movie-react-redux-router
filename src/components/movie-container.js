import React from "react";
import MovieCard from "./movie-card";
import { connect } from "react-redux";

function MoviesContainer(props) {
  return (
    <div className="movies-container">
      {props.movies
        .filter((movie) =>
        (  movie.name.toLowerCase().includes(props.searchname.toLowerCase()) 
        && movie.star>=props.rate
        )
        )
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}

const mapStateProps = (state) => ({
  movies: state.movies,
  searchname: state.keyword,
  rate:state.rate
});

export default connect(mapStateProps)(MoviesContainer);
