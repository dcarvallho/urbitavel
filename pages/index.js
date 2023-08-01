import React from "react";
import Head from "next/head";
import HomeContainer from "../components/home";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer />
    </>
  );
};

export default Home;
