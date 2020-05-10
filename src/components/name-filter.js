import React from "react";
import { connect } from "react-redux";
import { namefilter } from "../Action/action";
import Rating from "./rating";

function FilterName(props) {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Search movie"
        onChange={(event) => props.namefilter(event.target.value)}
      />
      <Rating count={props.rate} />
    </div>
  );
}

const mapStateProps = (state) => ({
  rate: state.rate,
});

export default connect(mapStateProps, { namefilter })(FilterName);
