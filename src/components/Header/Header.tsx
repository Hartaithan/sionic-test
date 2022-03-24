import React from "react";
import { IconCart, IconLocation, IconSearch } from "../../icons";
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <p className="header__logo">React</p>
      <div className="header__location">
        <IconLocation />
        <p>Александровск-Сахалинский</p>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Поиск бренда, товара, категории..." />
        <button type="button">
          <IconSearch />
        </button>
      </div>
      <button className="header__cart">
        <IconCart />
        <p className="header__cart__count">10+</p>
      </button>
      <img
        className="header__avatar"
        src="./img/avatar.png"
        alt="user avatar"
      />
    </div>
  );
};

export default Header;
