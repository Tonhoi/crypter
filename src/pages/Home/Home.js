import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import { Cart } from "./components/Cart";

import { Address } from "../../components/Address";
import postApi from "../../api/postApi";
import Form from "./components/Form/Form";

const cx = classNames.bind(styles);

// const paginatetion = {
//   offet: 1,
//   limit: 6,
// };

const INIT_PAGE = 1;
const LIMIT_PAGE = 6;

const Home = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(INIT_PAGE);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await postApi.getByOffsetAndLimitPage(page, LIMIT_PAGE);
        setData((prevData) => [...prevData, ...res.data.items]);
      } catch (error) {
        console.log("có lỗi xảy ra");
      }
    };
    fetch();
  }, [page]);
  const handlePagination = useCallback(() => {
    setPage(page + 1);
  }, [page]);
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("heading")}>Our News</h1>
      <div className={cx("container")}>
        <Cart items={data} onPagination={handlePagination} />
        <h2 className={cx("heading", "heading-contact")}>Contact Us</h2>
        <div className={cx("contact-block")}>
          <div className={cx("contact-block-left")}>
            <div className={cx("iframe-block")}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4831652602775!2d106.67258331533417!3d10.774257962178659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed8cbafd0d7%3A0xab984a095c52189c!2zMTgxIMSQLiBDYW8gVGjhuq9uZywgUGjGsOG7nW5nIDEyLCBRdeG6rW4gMTAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1669311561278!5m2!1svi!2s"
                width="600"
                height="450"
                style={{
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <Address />
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;
