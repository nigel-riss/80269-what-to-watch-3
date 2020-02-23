import React from "react";
import renderer from "react-test-renderer";
import App from "./app";


it(`<App /> renders correctly`, () => {
  const tree = renderer
    .create(<App
      movieName={`Sci-Fi`}
      movieGenre={`Infinity`}
      movieYear={2037}
      movies={[`2001: A Space Odyssey`, `Interstellar`, `Ad Astra`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
