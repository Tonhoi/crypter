import React from "react";
import classNames from "classnames/bind";

import styles from "./Address.module.scss";
import {
  MailIcon,
  MapIcon,
  PhoneIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  TwiterIcon,
} from "../Icons";

const cx = classNames.bind(styles);
const Address = () => {
  return (
    <>
      <div className={cx("contact-info")}>
        <div className={cx("icon-block")}>
          <MapIcon className={cx("map-icon")} />
          <span>373A Tran Phu St, Ward 8, District 5, HCM City</span>
        </div>
        <div className={cx("icon-block")}>
          <MailIcon className={cx("mail-icon")} />
          <span>vanphong@tbgdphanmic.vn</span>
        </div>
        <div className={cx("icon-block")}>
          <PhoneIcon className={cx("phone-icon")} />
          <span>+(84) 28 3924 1814</span>
        </div>
      </div>
      <div className={cx("icon-block", "hide-on-mobile")}>
        <FacebookIcon className={cx("facebook-icon")} />
        <InstagramIcon className={cx("instagram-icon")} />
        <LinkedIcon className={cx("linked-icon")} />
        <TwiterIcon className={cx("twiter-icon")} />
      </div>
    </>
  );
};

export default Address;
