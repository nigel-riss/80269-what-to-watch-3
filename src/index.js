import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


const Settings = {
  MOVIE_NAME: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  MOVIE_YEAR: 2014
};

const MOVIE_LIST = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];


ReactDOM.render(
    <App
      movieName={Settings.MOVIE_NAME}
      movieGenre={Settings.MOVIE_GENRE}
      movieYear={Settings.MOVIE_YEAR}
      movies={MOVIE_LIST}
    />,
    document.querySelector(`#root`)
);
