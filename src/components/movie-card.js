import React from "react";
import { connect } from "react-redux";
import Rating from "./rating";
import { deletemovie } from "../Action/action";
import Modal2 from "./modal2";
import {Link} from 'react-router-dom'

function MovieCard(props) {
  const { movie } = props;

  return (
    <div className="card">
      <Rating count={movie.star} />
      <img src={movie.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.year}</p>

        <button
          className="btn btn-danger btn"
          onClick={() => props.deletemovie(movie.id)}
        >
          Remove
        </button>
        <Modal2 name="Edit" movie={movie} />

        <div>
          <Link></Link>
          <button
            type="button"
            class="btn btn-success"
            data-toggle="modal"
            data-target=".bd-example-modal-sm"

          >
            Description
          </button>

          <div
            class="modal fade bd-example-modal-sm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm">
              <div class="modal-content">{movie.description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { deletemovie })(MovieCard);
