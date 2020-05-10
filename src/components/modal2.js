import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addmovie, updatemovie } from "../Action/action";

function Modal2(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [moviename, setMoviename] = useState(
    props.movie ? props.movie.name : ""
  );
  const [movieyear, setMovieyear] = useState(
    props.movie ? props.movie.year : ""
  );
  const [movierate, setMovierate] = useState(
    props.movie ? props.movie.star : ""
  );
  const [movieimage, setMovieimage] = useState(
    props.movie ? props.movie.img : ""
  );
  const [moviedescription, setMoviedescription] = useState(
    props.movie ? props.movie.description : ""
  );

  const addMovie = () => {
    props.movie
      ? props.updatemovie({
          id:props.movie.id,
          name: moviename,
          img: movieimage,
          year: movieyear,
          star: movierate,
          description: moviedescription,
        })
      : props.addmovie({
          name: moviename,
          img: movieimage,
          year: movieyear,
          star: movierate,
          description: moviedescription,
          id: Math.random(),
        });
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="movie name"
            value={moviename}
            onChange={(event) => setMoviename(event.target.value)}
          />
          <input
            type="text"
            placeholder="movie image"
            value={movieimage}
            onChange={(event) => setMovieimage(event.target.value)}
          />
          <input
            type="text"
            placeholder="movie rating"
            value={movierate}
            onChange={(event) => setMovierate(event.target.value)}
          />
          <input
            type="text"
            placeholder="movie year"
            value={movieyear}
            onChange={(event) => setMovieyear(event.target.value)}
          />
          <input
            type="text"
            placeholder="movie description"
            value={moviedescription}
            onChange={(event) => setMoviedescription(event.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              addMovie();
              handleClose();
            }}
          >
            {props.movie ? "update" : "add"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(null, { addmovie, updatemovie })(Modal2);
