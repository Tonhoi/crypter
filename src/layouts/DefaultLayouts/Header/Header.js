import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import {
  CloseIcon,
  LogoIcon,
  MenuIcon,
  SearchIcon,
} from "../../../components/Icons";
import Navigation from "./components/Navigation/Navigation";
import { routes } from "../../../configs";

const cx = classNames.bind(styles);
const Header = () => {
  const [isMenuMobile, setIsMenuMobile] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <div className={cx("logo-block")}>
          <LogoIcon className={cx("logo")} />
        </div>
        <div className={cx("list-block")}>
          <div className={cx("list")}>
            <Navigation title={"Home"} to={routes.home} />
            <Navigation title={"About"} to={routes.home} />
            <Navigation title={"Product"} to={routes.home} />
            <Navigation title={"News"} to={routes.home} />
            <Navigation title={"Gallery"} to={routes.home} />
            <Navigation title={"Contact"} to={routes.home} />
          </div>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={cx("logo-block")}>
            <LogoIcon className={cx("logo")} />
          </div>
          <div
            className={cx("menu-icon-block", "close-icon-block")}
            onClick={() => setIsMenuMobile(!isMenuMobile)}
          >
            <CloseIcon />
          </div>
        </div>
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
