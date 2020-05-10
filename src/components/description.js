import React from "react";
import { connect } from "react-redux";

function Description(props) {
    const movie=props.movies.filter(movie=>movie.id===parseInt(props.match.params.id))
  return <div>
   { movie[0].description } 
      </div>;
}
const mapStateProps = (state) => ({
  movies: state.movies,
});

export default connect(mapStateProps)(Description);
