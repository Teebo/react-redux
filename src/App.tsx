import React from "react";
import "./App.css";
import { MovieListContainer } from "./container-components/movie-list.container";
import { OrderSelectContainer } from "./container-components/order-select";

function App() {
  return (
    <div className="App">
      <OrderSelectContainer />
      <MovieListContainer />
    </div>
  );
}

export default App;
