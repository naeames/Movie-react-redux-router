import React from "react";
import { connect } from "react-redux";
import {ratingfilter} from "../Action/action";

const Rating = (props) => {
  const { count} = props;
  let star = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      star.push(<span onClick={()=>props.ratingfilter(i+1)}>★</span>);
    } else {
      star.push(<span onClick={()=>props.ratingfilter(i+1)}>☆</span>);
    }
  }
  return <div className="card-movie-rating">{star}</div>;
};
export default connect(null, {ratingfilter}) ( Rating);


