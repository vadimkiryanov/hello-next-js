import Link from "next/link";
import React from "react";
import MainLayout from "../layouts/MainLayout";

const Users = ({ usersFetch }) => {
  return (
    <>
      <MainLayout keywordsProp={"users, persons"} titleProp={"Список пользователей"}>
        <h2>Список пользователей</h2>
        <ul>
          {usersFetch.map((user) => {
            return (
              <li key={user.id}>
                <Link legacyBehavior href={`/users/${user.id}`}>
                  <a>{user.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </MainLayout>
    </>
  );
};

export default Users;

// next функция для запросов на сервер в СТАТИЧНОЙ маршрутизации
export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`); // Идет запрос
  const usersFetch = await response.json(); // Распарщенный запрос прокидывается в константу

  return {
    props: { usersFetch }, // Сюда прокидываем полученные данные
  };
}
