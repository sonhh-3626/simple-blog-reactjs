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
        not_found: "Not found post with this id!",
        create_new_post: "Create new post",
        title: "Title",
        author: "Author",
        excerpt: "Excerpt",
        content: "Content",
        post: "Post",
        fill_form_alert: "Please, fill in all field.",
        back: "Back",
        about_my_blog: "About My Blog",
        welcome_to_my_blog: "Welcome to My Blog!",
        about_blog_description_part1: "Here, I share my thoughts, experiences, and tutorials about web development, programming, and technology.",
        about_blog_description_part2: "I hope you find something useful and inspiring. Thank you for visiting!"
      }
    },
    vi: {
      translation: {
        home: "Trang chủ",
        about: "Về trang web",
        about_my_blog: "Về Blog của tôi",
        welcome_to_my_blog: "Chào mừng đến với Blog của tôi!",
        about_blog_description_part1: "Tại đây, tôi chia sẻ những suy nghĩ, kinh nghiệm và hướng dẫn về phát triển web, lập trình và công nghệ.",
        about_blog_description_part2: "Tôi hy vọng bạn tìm thấy điều gì đó hữu ích và truyền cảm hứng. Cảm ơn bạn đã ghé thăm!",
        current_posts: "Các bài viết mới nhất",
        no_post: "Không có bài viết nào.",
        read_more: "Đọc thêm",
        by: "Bởi",
        on: "vào lúc ",
        error_read_from_local_storage: "Lỗi đọc dữ liệu  từ Local Storage:",
        error_write_to_local_storage :"Lỗi viết dữ liệu vào Local Storage:",
        not_found: "Không tìm thấy bài viết!",
        create_new_post: "Tạo bài mới",
        title: "Tiêu đề",
        author: "Tác giả",
        excerpt: "Mô tả ngắn",
        content: "Nội dung bài viết",
        post: "Đăng bài",
        fill_form_alert: "Vui lòng điền đầy đủ tất cả các trường.",
        back: "Quay lại",
      }
    }
  }
});

export default i18n;
