import { useTranslation } from "react-i18next";

import PostCard, { type Post } from "../components/PostCard";

interface HomePageProps {
  posts: Post[],
}

export default function HomePage({ posts }: HomePageProps) {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-10">
        {t("current_posts")}
      </h1>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            date={new Date(post.date)}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </>
  )
}
