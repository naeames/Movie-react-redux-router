export const namefilter = (payload) => {
  return {
    type: "NAME_FILTER",
    payload,
  };
};

export const ratingfilter = (payload) => {
  return {
    type: "RATING_FILTER",
    payload,
  };
};

export const addmovie = (payload) => {
  return {
    type: "ADD_MOVIE",
    payload,
  };
};

export const deletemovie = (payload) => {
  return {
    type: "DELETE_MOVIE",
    payload,
  };
};

export const editmovie = (payload) => {
  return {
    type: "EDIT_MOVIE",
    payload,
  };
};

export const updatemovie = (payload) => {
  return {
    type: "UPDATE_MOVIE",
    payload,
  };
};
