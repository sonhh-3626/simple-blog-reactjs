import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  lng: "vi",
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        current_posts: "Current posts",
        no_post: "No posts.",
        read_more: "Read more",
        by: "By",
        on: "on ",
      }
    },
    vi: {
      translation: {
        home: "Trang chủ",
        about: "Về trang web",
        current_posts: "Các bài viết mới nhất",
        no_post: "Không có bài viết nào.",
        read_more: "Đọc thêm",
        by: "Bởi",
        on: "vào lúc ",
      }
    }
  }
});

export default i18n;
