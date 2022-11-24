import React from "react";
import classNames from "classnames/bind";
import styles from "../Header.module.scss";

const cx = classNames.bind(styles);
const Navigation = ({ title }) => {
  return (
    <li className={cx("item")}>
      <a href="" className={cx("link")}>
        {title}
      </a>
    </li>
  );
};

export default Navigation;
