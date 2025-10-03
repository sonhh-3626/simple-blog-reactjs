import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PostDetail.css";

import { type Post } from "../components/PostCard";
import Button from "./Button";

interface PostDetailProps {
  posts: Post[],
}

export default function PostDetail({posts}: PostDetailProps) {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id || ""));
  const { t } = useTranslation();

  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  }

  return (
    <div className="post-detail-container">
      {!post ? (
        <div className="text-center mt-20">{t("not_found")}</div>
      ) : (
        <div>
          <Button text={t("back")} handleClick={goToHomePage} />
          <p className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</p>

          <p className="mt-2 text-sm text-gray-500">
            {t("by")} <span className="font-medium">{post.author}</span> {t("on")} {post.date.toString()}
          </p>

          <p className="border-l-3 pl-3 m-5">{post.excerpt}</p>
          <p>{post.content}</p>
        </div>
      )}
    </div>
  )
}
