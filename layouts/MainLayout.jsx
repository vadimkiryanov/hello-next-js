import Head from "next/head";
import React from "react";
import ALink from "../components/ALink/ALink";
import Header from "../components/Header/Header";

const MainLayout = ({ children, keywordsProp, titleProp }) => {
  return (
    <>
      <Head>
        <meta keywords={"nextjs, vadim, tutorial, " + keywordsProp}></meta>
        <title>{!titleProp ? "Home" : titleProp}</title>
      </Head>

      <Header />

      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
