import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";


Enzyme.configure({
  adapter: new Adapter(),
});

it(`<Main /> header link is clicked`, () => {
  const handleHeaderLinkClick = jest.fn();

  const main = shallow(
      <Main
        movieName={`movieName`}
        movieGenre={`movieGenre`}
        movieYear={2008}
        movies={[`Ip Man`, `Ip Man 2`]}
        onHeaderClick={handleHeaderLinkClick}
      />
  );

  const movieHeaders = main.find(`.small-movie-card__link`).first();

  movieHeaders.props().onClick();

  // movieHeaders.forEach((node) => {
  //   node.props().onClick();
  // });

  expect(handleHeaderLinkClick.mock.calls.length).toBe(1);
});
