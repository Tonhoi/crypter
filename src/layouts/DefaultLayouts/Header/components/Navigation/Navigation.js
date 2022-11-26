import React from "react";
import classNames from "classnames/bind";
import styles from "../../Header.module.scss";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);
const Navigation = ({ title, to }) => {
  return (
    <NavLink to={to} className={cx("item")}>
      <a href="" className={cx("link")}>
        {title}
      </a>
    </NavLink>
  );
};

export default Navigation;
