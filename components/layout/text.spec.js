import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Wrapper from ".";

import { Provider } from "react-redux";
import { store } from "../../store";

const setup = () => {
  render(
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};
describe("<Wrapper />", () => {
  it("should render component properly", () => {
    setup();

    expect(screen.getByText("Sobre nos", { exact: false })).toBeInTheDocument();
  });
});
