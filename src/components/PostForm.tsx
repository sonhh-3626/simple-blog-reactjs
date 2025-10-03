import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { type Post } from "./PostCard";
import InputBox from "./form/InputBox";
import TextareaBox from "./form/TextareaBox";

interface PostFormProps {
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export default function PostForm({ setPosts }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validateForm = (): boolean => {
    if (!title || !author || !excerpt || !content) {
      alert(t("fill_form_alert"));
      return false;
    }
    return true;
  };

  const savePost = (): Post => {
    const newPost: Post = {
      id: Date.now(),
      title,
      author,
      excerpt,
      content,
      date: new Date(),
    };
    setPosts((prevPosts: Post[]) => [...prevPosts, newPost]);
    return newPost;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newPost = savePost();
    navigate(`/post/${newPost.id}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6 mt-5 bg-white shadow rounded-lg space-y-6"
      >
        <p className="text-3xl font-bold text-center">
          {t("create_new_post")}
        </p>
        <InputBox
          placeholder={t("title")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-bold border-none focus:ring-0 focus:outline-none placeholder-gray-400"
        />

        <InputBox
          placeholder={t("author")}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full text-gray-600 border-none focus:ring-0 focus:outline-none placeholder-gray-400"
        />

        <InputBox
          placeholder={t("excerpt")}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className="w-full text-lg border-none focus:ring-0 focus:outline-none placeholder-gray-400"
        />

        <TextareaBox
          placeholder={t("content")}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full text-base border-none focus:ring-0 focus:outline-none placeholder-gray-400 min-h-[300px] resize-none"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("post")}
        </button>
      </form>
    </>
  )
}
