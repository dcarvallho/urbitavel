import React from "react";
import "../styles/globals.css";
import Wrapper from "../components/layout";

import { store } from "../store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
    </Provider>
  );
}

export default MyApp;
