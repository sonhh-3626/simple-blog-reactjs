import { useTranslation } from "react-i18next";

import "./PostCard.css";
import Button from "./Button";

export interface Post {
  id: number,
  title: string,
  author: string,
  date: Date,
  excerpt: string,
  content: string
}

export interface PostCardProps {
  id: number;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
}

export default function PostCard({ id, title, author, date, excerpt }: PostCardProps) {
  const { t } = useTranslation();

  return (
    <div className="postCard">
      <div className="postCardContent">
        <h2 className="postCardTitle">
          {title}
        </h2>

        <p className="postCardMeta">
          {t("by")} <span className="postCardAuthor">{author}</span> {t("on")}
          {date.toLocaleDateString()}
        </p>

        <p className="postCardExcerpt">
          {excerpt}
        </p>

        <Button text={t("read_more")} />
      </div>
    </div>
  )
}
