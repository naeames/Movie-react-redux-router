import React from "react";
import "./App.css";
import FilterName from "./components/name-filter";
import Modal2 from "./components/modal2";
import MoviesContainer from "./components/movie-container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./components/description";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FilterName />
          <Modal2 name="Add movie" />
          <MoviesContainer />
        </Route>
        <Route exact path="/description/:id" component={Description} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;