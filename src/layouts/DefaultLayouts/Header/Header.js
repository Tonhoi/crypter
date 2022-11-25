import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Images from "../../../assets/image";
import { CloseIcon, MenuIcon, SearchIcon } from "../../../components/Icons";
import Navigation from "./components/Navigation/Navigation";

const cx = classNames.bind(styles);
const Header = () => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);
  console.log(isMenuMobile);

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <div className={cx("image-block")}>
          <img src={Images.logo} alt="" className={cx("image")} />
        </div>
        <div className={cx("list-block")}>
          <ul className={cx("list")}>
            <Navigation title={"Home"} />
            <Navigation title={"About"} />
            <Navigation title={"Product"} />
            <Navigation title={"News"} />
            <Navigation title={"Gallery"} />
            <Navigation title={"Contact"} />
          </ul>
        </div>
        <div
          className={cx("menu-icon-block")}
          onClick={() => setIsMenuMobile(!isMenuMobile)}
        >
          {isMenuMobile ? (
            <CloseIcon />
          ) : (
            <MenuIcon className={cx("menu-icon")} />
          )}
        </div>
        <div className={cx("search-block")}>
          <input
            type="text"
            placeholder="Search"
            className={cx("search-input")}
          />
          <div className={cx("search-icon-block")}>
            <SearchIcon className={cx("search-icon")} />
          </div>
        </div>
      </header>
      {/* mobile, tablet */}
      <div
        className={cx("nav-mobile", {
          active: isMenuMobile,
        })}
      >
        <ul className={cx("list")}>
          <li className={cx("item")}>Home</li>
          <li className={cx("item")}>About</li>
          <li className={cx("item")}>Products</li>
          <li className={cx("item")}>News</li>
          <li className={cx("item")}>Gallery</li>
          <li className={cx("item")}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
