import Link from "next/link";
import React from "react";
import styles from "./ALink.module.scss";

// Кастомная ссылка
export default ({ url, text }) => {
  return (
    <>
      <Link legacyBehavior href={url}>
        <a className={styles.link}>{text}</a>
      </Link>
    </>
  );
};

// export default A;
