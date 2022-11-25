import axiosClient from "./axiosClient";

const postApi = {
  getByOffsetAndLimitPage(page, LIMIT_PAGE) {
    const url = `/pages/`;
    const params = {
      params: {
        type: "news.NewsDetailPage",
        fields: "*",
        offset: page,
        limit: LIMIT_PAGE,
      },
    };
    return axiosClient.get(url, params);
  },
};

export default postApi;
