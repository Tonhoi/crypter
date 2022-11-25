import axiosClient from "./axiosClient";

const contactApi = {
  contactPost(valueInput) {
    const Key_Field = {
      phone_number: `${
        valueInput?.phone[0] === "0" && valueInput?.phone?.length === 10
          ? valueInput?.phone?.replace("0", "+84")
          : alert("Số điện thoại phải bắt đầu bằng số 0 và phải có 10 số")
      }`,
      name: valueInput.name,
      email: valueInput.email,
      message: valueInput.message,
    };

    const url = "https://mic.t-solution.vn/api/v2/submissions/";

    const headers = {
      Authorization: "Api-Key dummy",
    };
    return axiosClient({
      method: "post",
      url,
      headers,
      data: Key_Field,
    });
  },
};

export default contactApi;
