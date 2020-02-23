import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";


const handleListHeaderClick = () => {alert('click mf')};


const App = (props) => {
  const {movieName, movieGenre, movieYear} = props;
  const {movies} = props;

  return (
    <Main
      movieName={movieName}
      movieGenre={movieGenre}
      movieYear={movieYear}
      movies={movies}
      onListHeaderClick={handleListHeaderClick}
    />
  );
};


App.propTypes = {
  movieName: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieYear: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default App;
