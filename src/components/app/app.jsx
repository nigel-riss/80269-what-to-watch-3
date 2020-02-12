import React from "react";
import Main from "../main/main.jsx";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, movieGenre, movieYear} = props;

  return (
    <Main
      movieName={movieName}
      movieGenre={movieGenre}
      movieYear={movieYear}
    />
  );
};


export default App;
