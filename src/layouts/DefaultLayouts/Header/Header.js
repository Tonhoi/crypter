import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Images from "../../../assets/image";
import { MenuIcon, SearchIcon } from "../../../components/Icons";
import Navigation from "./components/Navigation";

const cx = classNames.bind(styles);
const Header = () => {
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
        <div className={cx("menu-icon-block")}>
          <MenuIcon className={cx("menu-icon")} />
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

        {/* mobile, tablet */}
      </header>
    </div>
  );
};

export default Header;
