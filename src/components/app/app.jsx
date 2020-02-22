import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, movieGenre, movieYear} = props;
  // eslint-disable-next-line react/prop-types
  const {movies} = props;

  return (
    <Main
      movieName={movieName}
      movieGenre={movieGenre}
      movieYear={movieYear}
      movies={movies}
    />
  );
};


export default App;
