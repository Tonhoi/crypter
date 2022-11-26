import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import { Address } from "../../../components/Address";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedIcon,
  LogoIcon,
  TwiterIcon,
} from "../../../components/Icons";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer-top")}>
        <div className={cx("logo-block")}>
          <LogoIcon className={cx("logo")} />
        </div>
        <div className={cx("separate")}>
          <span className={cx("heading")}>Menu</span>
          <ul className={cx("list")}>
            <li className={cx("item")}>About</li>
            <li className={cx("item")}>News</li>
            <li className={cx("item")}>Gallery</li>
          </ul>
        </div>
        <div className={cx("hide-on-mobile")}>
          <span className={cx("heading")}>Products</span>
          <ul className={cx("list")}>
            <li className={cx("item")}>Chalkboard Chalk</li>
            <li className={cx("item")}>
              <p>School Supplies and</p>
              <p>Student Tools</p>
            </li>
            <li className={cx("item")}>Office Supplies</li>
            <li className={cx("item")}>Art Supplies</li>
          </ul>
        </div>
        <div className={cx("address")}>
          <span className={cx("heading")}>Address</span>
          <Address />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4831652602775!2d106.67258331533417!3d10.774257962178659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed8cbafd0d7%3A0xab984a095c52189c!2zMTgxIMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1669311561278!5m2!1svi!2s"
          width="100%"
          height="177"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={cx("footer-bottom")}>
        <div className={cx("icon-mobile-block")}>
          <FacebookIcon className={cx("icon-mobile")} />
          <InstagramIcon className={cx("icon-mobile")} />
          <LinkedIcon className={cx("icon-mobile")} />
          <TwiterIcon className={cx("icon-mobile")} />
        </div>
        <span>Copyright © 2022 T-SOLUTION. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
