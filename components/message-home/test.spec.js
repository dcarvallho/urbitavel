import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { Provider } from "react-redux";
import { store } from "../../store";

import MessageHome from ".";

const setup = () => {
  render(
    <Provider store={store}>
      <MessageHome />
    </Provider>
  );
};

describe("<MessageHome />", () => {
  it("should render component properly", () => {
    setup();

    const header = screen.getByText("mudar o mundo", { exact: false });

    expect(header).toBeInTheDocument();
  });

  it("should render button blue componennet", () => {
    setup();

    const button = screen.getByRole("button", { name: /saiba quem somos/i });

    userEvent(button);

    expect(screen.getByText(/sobre nós/i)).toBeInTheDocument();
  });
});
