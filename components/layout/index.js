import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
