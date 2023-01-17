import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";

// Компонент относится к компоненту users from pages
const UsersSlug = ({ userOne }) => {
  const router = useRouter();
  console.log({ router });

  return (
    <MainLayout keywordsProp={"man, user"} titleProp={userOne.name}>
      <h2> Пользователь с id: {router.query.id}</h2>
      <h2> Имя пользователя: {userOne.name}</h2>
      <h2> Номер пользователя: {userOne.phone}</h2>
    </MainLayout>
  );
};

// next функция для запросов на сервер в ДИНАМИЧЕСКОЙ маршрутизации
// Получаем {params} вместо context
export async function getServerSideProps({ params }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE}/users/${params.id}` // Идет запрос
  );
  const userOne = await response.json(); // Распарщенный запрос прокидывается в константу

  console.log(params);

  return {
    props: { userOne }, // will be passed to the page component as props
  };
}

export default UsersSlug;
