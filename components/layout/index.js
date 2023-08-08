import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Banner from "./banner";

const Wrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <main style={{ height: "600px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Wrapper;
