import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import axios from "axios";

import styles from "./Home.module.scss";
import { Cart } from "./components/Cart";

import { Address } from "../../components/Address";

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
  console.log(data);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          `https://mic.t-solution.vn/api/v2/pages/?type=news.NewsDetailPage&fields=*&offset=${page}&limit=${LIMIT_PAGE}`
        );
        console.log(res);
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
        <h2 className={cx("heading")}>Contact Us</h2>
        <div className={cx("contact-block")}>
          <div className={cx("contact-block-left")}>
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
            <div>
              <Address />
            </div>
          </div>
          <div>
            <form className={cx("form-block")}>
              <h3>Please send us a message if you need any help!</h3>
              <div className={cx("form-group")}>
                <label htmlFor="" className={cx("form-label")}>
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="John Wick"
                  className={cx("form-input")}
                />
              </div>

              <div className={cx("form-group-row-block")}>
                <div className={cx("form-group-row")}>
                  <label htmlFor="" className={cx("form-label")}>
                    PHONE
                  </label>
                  <input
                    type="text"
                    placeholder="0909999999"
                    className={cx("form-input")}
                  />
                </div>
                <div className={cx("form-group-row")}>
                  <label htmlFor="" className={cx("form-label")}>
                    EMAIL
                  </label>
                  <input
                    type="text"
                    placeholder="john.wick@gmail.com"
                    className={cx("form-input")}
                  />
                </div>
              </div>

              <div className={cx("form-group")}>
                <label htmlFor="" className={cx("form-label")}>
                  MESSAGE
                </label>

                <textarea
                  name=""
                  id=""
                  placeholder="I need some help..."
                  className={cx("form-input")}
                  style={{
                    height: "256px",
                  }}
                ></textarea>
              </div>
            </form>
            <button className={cx("button-submit")}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
