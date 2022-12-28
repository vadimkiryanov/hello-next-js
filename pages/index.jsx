import Head from "next/head";
import Link from "next/link";
import React from "react";
import ALink from "../components/ALink/ALink";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
  return (
    <MainLayout keywordsProp={'Home page'}>
      <h1>Главная страница</h1>
    </MainLayout>
  );
};

export default Index;
