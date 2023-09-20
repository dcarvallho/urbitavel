import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeContainer from ".";

import { Provider } from "react-redux";
import { store } from "../../store";

const setup = () => {
  render(
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );
};

describe("<HomeContainer/>", () => {
  it("Should render component properly", () => {
    setup();
    expect(screen.getByText(/iniciativa coletiva/i)).toBeInTheDocument();
    expect(screen.getByText(/ideia interventiva/i)).toBeInTheDocument();
    expect(screen.getByAltText(/lixeira/i)).toBeInTheDocument();
  });
});
