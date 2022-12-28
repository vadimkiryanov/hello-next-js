import React from "react";
import ALink from "../ALink/ALink";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <ALink url={"/"} text="LOGO" />

          <nav>
            <ul className="header__list">
              <li className="header__link">
                <ALink url={"/"} text="Home" />
              </li>
              <li className="header__link">
                <ALink url={"/users"} text="Users" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
