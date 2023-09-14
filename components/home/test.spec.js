import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import HomeContainer from ".";

import { Provider } from "react-redux";
import { store } from "../../store";

describe("<HomeContainer/>", () => {
  it("Should render component properly", () => {
    render(
      <Provider store={store}>
        <HomeContainer />
      </Provider>
    );

    expect(screen.getByText(/urbitável/i)).toBeInTheDocument();

    expect(screen.getByText(/lixeira/i)).toBeInTheDocument();
  });
});
