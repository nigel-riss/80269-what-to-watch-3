import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`<Main /> renders correctly`, () => {
  const tree = renderer
    .create(<Main
      movieName={`Sci-Fi`}
      movieGenre={`Infinity`}
      movieYear={2037}
      movies={[`2001: A Space Odyssey`, `Interstellar`, `Ad Astra`]}
      onListHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
