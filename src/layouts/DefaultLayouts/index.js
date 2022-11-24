import React from "react";
import classNames from "classnames/bind";

import styles from "./DefaultLayouts.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const cx = classNames.bind(styles);
const DefaultLayouts = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <div className="grid-system wide">
        <div className={cx("padding")}>
          <div className={cx("header")}>
            <Header />
          </div>

          <div className={cx("content")}>{children}</div>
        </div>
      </div>

      <div className={cx("footer")}>
        <div className="grid-system wide">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayouts;
