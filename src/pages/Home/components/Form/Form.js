import React, { memo, useState } from "react";
import classNames from "classnames/bind";

import styles from "../../Home.module.scss";
import { contactApi } from "../../../../api";

const cx = classNames.bind(styles);
const Form = () => {
  const [valueInput, setValueInput] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  console.log(valueInput);

  const handleGetValueInput = (e) => {
    setValueInput({
      ...valueInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await contactApi.contactPost(valueInput);

      alert("Submit thành công");
    } catch (error) {
      alert("Số điện thoại không hợp lệ");
    }
  };

  return (
    <div>
      <form className={cx("form-block")} onSubmit={handleSubmitForm}>
        <h3>Please send us a message if you need any help!</h3>
        <div className={cx("form-group")}>
          <label htmlFor="" className={cx("form-label")}>
            NAME
          </label>
          <input
            type="text"
            placeholder="John Wick"
            className={cx("form-input")}
            name="name"
            value={valueInput.name}
            required
            onChange={handleGetValueInput}
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
              name="phone"
              value={valueInput.phone}
              required
              onChange={handleGetValueInput}
            />
          </div>
          <div className={cx("form-group-row")}>
            <label htmlFor="" className={cx("form-label")}>
              EMAIL
            </label>
            <input
              type="email"
              placeholder="john.wick@gmail.com"
              className={cx("form-input")}
              name="email"
              value={valueInput.email}
              required
              onChange={handleGetValueInput}
            />
          </div>
        </div>

        <div className={cx("form-group")}>
          <label htmlFor="" className={cx("form-label")}>
            MESSAGE
          </label>

          <textarea
            name="message"
            value={valueInput.message}
            placeholder="I need some help..."
            className={cx("form-input")}
            onChange={handleGetValueInput}
            required
            style={{
              height: "256px",
            }}
          ></textarea>
        </div>
        <button className={cx("button-submit")}>Submit</button>
      </form>
    </div>
  );
};

export default memo(Form);
