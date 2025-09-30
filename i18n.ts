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
        error_read_from_local_storage: "Error reading from localStorage:",
        error_write_to_local_storage :"Error writing to localStorage:",
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
        error_read_from_local_storage: "Lỗi đọc dữ liệu  từ Local Storage:",
        error_write_to_local_storage :"Lỗi viết dữ liệu vào Local Storage:",
      }
    }
  }
});

export default i18n;
