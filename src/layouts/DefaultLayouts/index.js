import React from "react";
import classNames from "classnames/bind";

import styles from "./DefaultLayouts.module.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ArrowUpIcon } from "../../components/Icons";

const cx = classNames.bind(styles);
const DefaultLayouts = ({ children }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={cx("wrapper")}>
      <div style={{ position: "relative" }}>
        <div className={cx("header")}>
          <div className="grid-system wide">
            <div className={cx("padding")}>
              <Header />
            </div>
          </div>
        </div>
        <div className="grid-system wide">
          <div className={cx("padding")}>
            <div className={cx("content")}>{children}</div>
          </div>
        </div>
        <div className={cx("arrow-up-icon-block")} onClick={handleScrollTop}>
          <ArrowUpIcon className={cx("arrow-up-icon")} />
        </div>
        {/* </div> */}
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
