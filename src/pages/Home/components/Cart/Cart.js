import React, { memo } from "react";
import classNames from "classnames/bind";
import parse from "html-react-parser";
import moment from "moment";

import styles from "../../Home.module.scss";

const cx = classNames.bind(styles);
const Cart = ({ items, onPagination }) => {
  return (
    <div className={cx("cart-block")}>
      {items?.length > 0 &&
        items.map((item, index) => (
          <div className={cx("cart")} key={index}>
            <div className={cx("image-block")}>
              <img src={item.thumbnail} alt="" className={cx("image")} />
            </div>
            <div className={cx("info-block")}>
              <span className={cx("name")}>{item.title}</span>
              <span className={cx("time")}>
                {moment(item.last_published_at).format("DD/MM/YYYY")}
              </span>
            </div>
            <span className={cx("title")}>
              {parse(item?.content[0]?.value)}
            </span>
          </div>
        ))}

      <div className={cx("button-see-all-block")}>
        <button className={cx("button-see-all")} onClick={onPagination}>
          See More
        </button>
      </div>
    </div>
  );
};

export default memo(Cart);
