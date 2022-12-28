import Head from "next/head";
import React from "react";
import ALink from "../components/ALink/ALink";

const MainLayout = ({ children, keywordsProp, titleProp }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, vadim, tutorial, " + keywordsProp}></meta>
        <title>{!titleProp ? "Home" : titleProp}</title>
      </Head>

      <nav className="navbar">
        <div className="container container--navbar">
          <ALink url={"/"} text="Home" />
          <ALink url={"/users"} text="Users" />
        </div>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};

export default MainLayout;
